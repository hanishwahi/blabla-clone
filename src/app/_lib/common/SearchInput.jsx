// import React from 'react'

// function SearchInput({ placeholder = "search" }) {
//     return (
//         <div className='flex items-center'>
//             <div className=" border-4 h-5 w-5 rounded-full"></div>
//             <input type="text" name="" id="" placeholder={placeholder} className='  p-2 rounded-15 outline-none' />
//         </div>
//     )
// }

// export default SearchInput


"use client"
import { useState } from "react";

const sampleData = ["Chandigarh", "Delhi", "Mumbai", "Mohali", "Yamunanagar", "Karnal", "Shimla"];

export const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);
        if (query.length > 0) {
            const results = sampleData.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(results);
            setShowDropdown(true);
        } else {
            setFilteredResults([]);
            setShowDropdown(false);
        }
    };

    const handleSelect = (item) => {
        setSearchTerm(item);
        setShowDropdown(false);
    };

    return (
        <div className="relative w-64">
            <div className="flex items-center">
                <div className=" border-4 h-5 w-5 rounded-full"></div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full p-2   rounded-md  outline-none"
                />
            </div>
            {showDropdown && filteredResults?.length > 0 && (
                <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-auto">
                    {filteredResults.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput