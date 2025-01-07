import React from "react";
import { Link } from "react-router-dom";

function Card({ image, subheading, title, newsURL }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-6 flex flex-col flex-grow">
        {/* Subheading */}
        <p className="text-sm text-gray-500 mb-2">{subheading}</p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

        {/* Button */}
        <div className="mt-auto">
          <a href={newsURL} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 ease-in-out">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
