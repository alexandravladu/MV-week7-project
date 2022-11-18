// slider code
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();
//API
const text = document.querySelector('.quote')
const author = document.querySelector('.author')
const nextButton = document.querySelector('.btn')
const tweetButton = document.querySelector('#twitter-share-button')
const getQuote = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const quotes = await response.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
    tweetButton.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`
    // console.log(item)
}

nextButton.addEventListener('click', getQuote)

getQuote()