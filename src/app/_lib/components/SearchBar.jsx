import React from 'react'
import SearchInput from '../common/SearchInput'
import Calandar from '../common/Calandar'
import CustomButton from '../common/CustomButton'


function SearchBar() {
    return (
        <>
            <div className="grid grid-cols-4 justify-between items-center ps-3 pe-0   w-full bg-white rounded-15 shadow-md  ">
                <div className='flex justify-between pe-3'>
                    <SearchInput />
                    <div className='border-e h-100'></div>
                </div>
                <div className='flex justify-between pe-3'>
                    <SearchInput />
                    <div className='border-e h-100'></div>
                </div>
                <Calandar />
                <CustomButton name="Search" className="bg-primary text-white h-12 capitalize rounded-e-10 px-5" />
            </div>
        </>
    )
}

export default SearchBar