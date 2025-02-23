import React from 'react'
import SearchBar from '@/app/_lib/components/SearchBar'

function Banner() {
    return (
        <>
            <div className="relative">
                <div className='h-[250px] w-full bg-primary/80 py-5 bg-banner'>
                    <h2 className='text-center text-40 font-600 text-white'>Your pick of rides at low prices</h2>
                </div>
                <div className="flex justify-center mt-[-25px] w-[90%] mx-auto">
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default Banner