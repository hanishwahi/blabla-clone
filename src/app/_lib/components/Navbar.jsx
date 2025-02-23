import React from 'react'
import { AddIcon, SearchIcon } from '@/app/_lib/icons'

function Navbar() {
    return (
        <div>
            <div className="w-11/12 mx-auto p-3 flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKLcIZAQykoL2nYC6naNqxKLnETke-vTpEA&s" alt="" className='h-8 w-8' />
                    <span className='text-20'>BlaBlaCar</span>
                </div>
                <div className="flex gap-6">
                    <div className='flex gap-1'>
                        <SearchIcon classes="stroke-primary" />
                        <span className='text-primary font-600'>Search</span>
                    </div>
                    <div className="flex  gap-1">
                        <AddIcon classes="stroke-primary" />
                        <span className='text-primary font-600'>Publish a ride</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar