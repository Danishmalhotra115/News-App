import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import fetchNews from './Components/fetchnews';
import Card from './Components/Card';
import { useSelector, useDispatch } from "react-redux";
import { updateNewsType } from './features/news/newsSlice';
import Footer from './Components/Footer';

function App() {
  const newsType = useSelector((state) => state.newsType.value);
  const newsArray = fetchNews(newsType); // Get the news data
  

  // Filter out the news items where source.name is '[Removed]'
  const filteredNewsArray = newsArray.filter(item => item.source.name !== '[Removed]');

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <h2 className="text-3xl font-semibold text-white shadow-lg p-4 rounded-lg bg-opacity-80 bg-black">
          Enjoy your {newsType} news
        </h2>
      </div>


      {/* Flex container for the cards */}
      <div className="flex flex-wrap gap-4 p-4">
        {filteredNewsArray.length > 0 ? (
          
          filteredNewsArray.map((item, index) => (
            <Card
              key={index}
              image={item.urlToImage}
              subheading={item.source.name}
              title={item.title}
              newsURL={item.url}
              className="w-full sm:w-1/2 lg:w-1/3" // Responsive width of each card
            />
          ))
        ) : (
          <div className="flex justify-center items-center py-10">
          <h2 className="text-3xl font-semibold text-white shadow-lg p-4 rounded-lg bg-opacity-80 bg-black">
            {newsType} not found !
          </h2>
        </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;
