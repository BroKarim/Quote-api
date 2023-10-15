/*
SOURCE
- Hero code => https://youtu.be/FiUVwPYYT5A?si=ub1g1S1l6y21Dx56

*/
import React, { useState, useEffect } from 'react';

export default function Hero() {
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

  const handleNextQuoteClick = () => {
    getQuote('https://api.quotable.io/random');
  };

  useEffect(() => {
    // Initial data fetch
    getQuote('https://api.quotable.io/random');
  }, []);

  return (
    <div className="quote-box bg-white w-[700px] absolute top-1/2 left-1/2 p-[40px] rounded-3xl text-center transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-[32px] mb-[40px] ">Quote of the day</h2>
      <blockquote className="text-[26px] min-h-[110px]" id="quote">
        {quoteData.quote}
      </blockquote>
      {/* ni nanti bagian nama orang */}
      <span className="block mt-[10px] float-right relative" id="author">
        {quoteData.author}
      </span>
      <div className="w-full mt-[50px] flex justify-center ">
        <button className="bg-black text-white rounded-md border-solid border-gray w-[150px] h-[50px] flex items-center justify-center m-[5px] cursor-pointer " onClick={handleNextQuoteClick}>
          Next Quote
        </button>
        <button className="bg-black text-white rounded-md border-solid border-gray w-[150px] h-[50px] flex items-center justify-center m-[5px] cursor-pointer">Tweet</button>
      </div>
    </div>
  );
}
