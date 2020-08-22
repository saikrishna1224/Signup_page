function Quote(text) {
  this.text = text;
}

var currentIndex = 0;
var quote1 = new Quote('"This will be the best site"');
var quote2 = new Quote('"Everyone love there mom"');
var quote3 = new Quote('"Mayur is a intelligent men"');
var quote4 = new Quote('"The fear of death follows from the fear of life."');
var quote5 = new Quote('"Bujji is the best women"' );
var quote6 = new Quote('"Lakshmi and srinidhi is multi talented..."');
var quote7 = new Quote('"I have to follow my goals when your beside of me"');
var quote8 = new Quote('"Animals is the best place to love were yourself gets into a new life."');
var quote9 = new Quote('"Varun is a good programmer"');
var quote10 = new Quote('"Sai love animals"');



var quoteCollection = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

function generateRandomQuote() {
  var randomQuoteIndex = getRandomIntInclusive(0, quoteCollection.length);

  while (randomQuoteIndex === currentIndex) {
    randomQuoteIndex = getRandomIntInclusive(0, quoteCollection.length)
  }
  currentIndex = randomQuoteIndex;
  var randomQuote = quoteCollection[randomQuoteIndex];
  return randomQuote
}
function showRandomQuote(randomQuote) {
  document.getElementById('quote').innerHTML = randomQuote.text;
}
  

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomQuote() {
  var randomQuote = generateRandomQuote();
  showRandomQuote(randomQuote)
}
function quote() {
 

  if (Text.length > 280) {
    alert(  Text.length + ' characters long! ' )


  } else {
    window.open(Link ,'_blank')
  }
}
document.addEventListener('DOMContentLoaded', getRandomQuote);