$(document).ready(function() {
	var rand = Math.floor(Math.random() * (25));
	var currQuote = ""; var currAuthor = "";
	$("#generateQuote").on("click", function() {
		rand = Math.floor(Math.random() * (25));
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25&callback=", function(a) {
			currQuote = $(a[rand].content).text();
			currAuthor = a[rand].title;
			$("#quote").html(currQuote);
			$("#author").html(currAuthor);
		});
	});
	$("#tweet").on("click", function() {
		$("a").attr("href", "https://twitter.com/intent/tweet?text=" + currQuote + " - " + currAuthor);
	});
}); 
