"use strict";

// slider code
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); //API

var text = document.querySelector('.quote');
var author = document.querySelector('.author');
var nextButton = document.querySelector('.btn');
var tweetButton = document.querySelector('#twitter-share-button');

var getQuote = function getQuote() {
  var response, quotes, num, item, quote, authorName;
  return regeneratorRuntime.async(function getQuote$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://type.fit/api/quotes'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          quotes = _context.sent;
          num = Math.floor(Math.random() * quotes.length);
          item = quotes[num];
          quote = item.text;
          authorName = item.author;
          text.innerText = quote;
          author.innerText = authorName;
          tweetButton.href = "https://twitter.com/intent/tweet?text=".concat(quote, " - ").concat(authorName); // console.log(item)

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

nextButton.addEventListener('click', getQuote);
getQuote();