import React from 'react'

function SearchInput({ placeholder = "search" }) {
    return (
        <div className='flex items-center'>
            <div className=" border-4 h-5 w-5 rounded-full"></div>
            <input type="text" name="" id="" placeholder={placeholder} className='  p-2 rounded-15 outline-none' />
        </div>
    )
}

export default SearchInput