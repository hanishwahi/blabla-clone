import React from 'react'
import CustomButton from '../common/CustomButton'
import BannerTwo from '../images/scamDetective-653544b71d88f51797db.svg';

function HelpUs() {
    console.log(BannerTwo);

    return (
        <div className='bg-primary grid grid-cols-2 h-[400px]'>
            <div className="flex justify-end ">
                <img src={BannerTwo.src} alt="Scam Detective" className='w-[500px] h-auto' />


            </div>
            <div className="px-5 w-[80%] flex flex-col justify-center space-y-5">
                <h2 className='text-24 font-600 text-white'>Help us keep you safe from scams</h2>
                <p className='text-14 text-white'>At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
                <div className=" flex justify-center">
                    <CustomButton name='Learn more' className="bg-white text-primary text-12 font-600 w-auto px-4 py-3 rounded-20" />
                </div>
            </div>
        </div>
    )
}

export default HelpUs