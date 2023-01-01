const quoteContainer = document.getElementById('quote');
const authorContainer = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const tweetQuoteButton = document.getElementById('tweet-quote');

function getQuote() {
  // Make an HTTP GET request to the Quotes API
  const quoteApiUrl = 'https://api.quotable.io/random';
  fetch(quoteApiUrl)
    .then(response => response.json())
    .then(data => {
      quoteContainer.innerHTML = data.content;
      authorContainer.innerHTML = data.author;
    });
}

function tweetQuote() {
  const quote = quoteContainer.innerHTML;
  const author = authorContainer.innerHTML;
  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
  window.open(tweetUrl, '_blank');
}

newQuoteButton.addEventListener('click', getQuote);
tweetQuoteButton.addEventListener('click', tweetQuote);

getQuote(); // Get a quote on page load
