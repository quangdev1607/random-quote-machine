import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
import quotes from "../src/assets/quote.json";
import "./App.css";

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
    const [quote, setQuote] = useState(getRandomQuote());
    const [randomColor, setRandomColor] = useState(getRandomColor());

    const changeQuote = () => {
        setQuote(getRandomQuote());
        setRandomColor(getRandomColor());
    };

    return (
        <div className="background" style={{ backgroundColor: randomColor, transition }}>
            <div id="quote-box">
                <div className="quote-content" style={{ color: randomColor, transition }}>
                    <h2 id="text">
                        <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
                        {quote.quote}
                        <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
                    </h2>
                    <h4 id="author">- {quote.author}</h4>
                </div>
                <div className="buttons">
                    <a
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
                        id="tweet-quote"
                        style={{
                            backgroundColor: randomColor,
                            marginRight: "10px",
                            transition,
                        }}
                    >
                        <FaTwitter color="white" />
                    </a>
                    <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition }}>
                        Change Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
