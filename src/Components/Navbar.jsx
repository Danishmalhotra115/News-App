import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { updateNewsType } from '../features/news/newsSlice';

function Navbar() {
    const dispatch = useDispatch();
    const [inputNews, setInputNews] = useState("");

    // Handle the click event to update the news type
    const handleClick = (value) => {
        if(value === "") alert("Input Cannot be empty");
        else dispatch(updateNewsType(value));
    }

    // The list of news subheadings
    const newsSubheading = [
        { type: "Cricket" },
        { type: "Technology" },
        { type: "Business" },
        { type: "Bollywood" },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 shadow-lg rounded-lg flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">Business Standard</h1>
            <ul className="flex space-x-6 text-white font-medium">
                {newsSubheading.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item.type)}
                        className="cursor-pointer hover:text-yellow-300 transition duration-300"
                    >
                        {item.type}
                    </li>
                ))}
            </ul>
            <div className="flex items-center space-x-2 border-2 border-white rounded-xl p-2 bg-white">
                <input
                    type="text"
                    className="outline-none px-2 py-1 rounded-lg text-gray-700 w-64"
                    onChange={(e) => setInputNews(e.target.value)}
                    placeholder="Search Your News"
                />
                <SearchIcon
                    className="cursor-pointer text-blue-500 hover:text-teal-400 transition duration-300"
                    onClick={() => handleClick(inputNews)}
                />
            </div>
        </div>
    );
}

export default Navbar;
