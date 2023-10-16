import React, { useState, useEffect } from 'react';
import './style.css';

export default function QuotePage() {
  const [quoteData, setQuoteData] = useState({
    quote: 'Loading...',
    author: 'Loading...',
  });

  const getQuote = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuoteData({
        quote: data.content,
        author: data.author,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getQuote('https://api.quotable.io/random');
  }, []);

  const handleNextQuoteClick = () => {
    getQuote('https://api.quotable.io/random');
  };

  const tweet = () => {
    const { quote, author } = quoteData;
    const tweetText = `${quote} ---- by ${author}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, 'Tweet Window', 'width=600, height=300');
  };

  return (
    <>
      <section className="relative mx-auto">
        <nav className="flex justify-between border-b border-white bg-transparent text-white w-screen">
          <div className="px-5 xl:px-12 py-6 justify-between flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              Quote.
            </a>
            {/* Author */}
            <span className="block mt-[10px] float-right relative" id="author">
              {quoteData.author}
            </span>

            <div className="flex space-x-5 gap-6 items-center">
              <button class="relative inline-block px-4 py-2 font-medium group" onClick={handleNextQuoteClick}>
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white"></span>
                <span class="relative text-white group-hover:text-black">Next Quote</span>
              </button>
            </div>
          </div>
        </nav>
      </section>

      {/* Quote section */}
      <section className="max-w-full mt-6 h-96 mx-auto flex relative items-center">
        <div className="container  flex justify-center gap-6 flex-col items-center text-white">
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
            <g>
              <path
                d="M44.3,6.5c-9,0-15.9,7-15.9,16V44c0,0.8,0.7,1.5,1.5,1.5h17c0.8,0,1.5-0.7,1.5-1.5V27
		c0-0.8-0.7-1.5-1.5-1.5H34.4v-3c0-5,4.9-10,9.9-10h2.6c0.8,0,1.5-0.7,1.5-1.5V8c0-0.8-0.7-1.5-1.5-1.5H44.3z"
              />
              <path
                d="M19.5,6.5c-9,0-15.9,7-15.9,16V44c0,0.8,0.7,1.5,1.5,1.5h17c0.8,0,1.5-0.7,1.5-1.5V27
		c0-0.8-0.7-1.5-1.5-1.5H9.6v-3c0-5,4.9-10,9.9-10h2.6c0.8,0,1.5-0.7,1.5-1.5V8c0-0.8-0.7-1.5-1.5-1.5H19.5z"
              />
            </g>
            <path d="M30.5,8" />
          </svg>
          {/* Quote */}
          <blockquote className="text-5xl text-center min-h-[110px] px-20" id="quote">
            {quoteData.quote}
          </blockquote>

          {/* Twitter button */}
          <button
            onClick={tweet}
            className="inline-flex items-center justify-center gap-2 h-16 px-6 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Tweet
            <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path
                fill="#1DA1F2"
                stroke="#1DA1F2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94,6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
