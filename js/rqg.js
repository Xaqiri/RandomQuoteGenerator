'use strict'

$(document).ready(() => {
  let rand = Math.floor(Math.random() * (25))
  let currQuote = ''
  let currAuthor = ''
  $('#generateQuote').on('click', () => {
    rand = Math.floor(Math.random() * (25))
    $('#quote').html('Test quote')
    /*$.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25&callback=', a => {
      currQuote = $(a[rand].content).text()
      currAuthor = a[rand].title
      $('#quote').html(currQuote)
      $('#author').html(currAuthor)
    })*/
  })
  $('#tweet').on('click', () => {
    $('a').attr('href', 'https://twitter.com/intent/tweet?text=' + currQuote + ' - ' + currAuthor)
  })
})
