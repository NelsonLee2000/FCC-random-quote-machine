import { useState } from 'react';
import quotes from "./assets/quotes.json";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  }

  return<>
  <div className = "background">
    <div id = "quote-box">
      <div className = "quote-content">
        <h2 id = "text">{quote.quote}</h2>
        <h3 id = "author">-{quote.author}</h3>
      </div>
    
      <button id = "new-quote" onClick = {handleNewQuote}>New Quote</button>
      <a id = "tweet-quote" href = {"twitter.com/intent/tweet?hashtag=quotes&related=freecodecamp&text=${quote.quote}"} target = "_blank">"tweetgoeshere"</a>
    </div>
  </div>

  </> }

export default App
