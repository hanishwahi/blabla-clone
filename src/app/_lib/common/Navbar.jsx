import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="w-11/12 mx-auto p-3 flex justify-between">
                <div className='flex items-center gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKLcIZAQykoL2nYC6naNqxKLnETke-vTpEA&s" alt="" className='h-8 w-8' />
                    <span className='text-20'>BlaBlaCar</span>
                </div>
                <div className="">
                    <span>Search</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar