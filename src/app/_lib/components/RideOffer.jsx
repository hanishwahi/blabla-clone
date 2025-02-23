import React from 'react'
import CustomButton from '../common/CustomButton'
import BannerTwo from '../images/driver-c3bdd70e6a29c6af9ef1.svg';

function RideOffer() {
    return (
        <div className=' grid grid-cols-2 h-[400px] w-[992px] mx-auto'>
            <div className="pe-24  flex flex-col justify-center items-start space-y-5">
                <h2 className='text-26 font-600 text-blue'>Driving in your car soon?</h2>
                <p className='text-14 text-secondary font-500'>Let's make this your least expensive journey ever.</p>
                <div className=" flex justify-center  w-full">
                    <CustomButton name='Offer a ride' className="bg-primary text-white text-14 font-600 w-auto px-6 py-3 rounded-30" />
                </div>
            </div>
            <div className="flex justify-start">
                <img src={BannerTwo.src} alt="Scam Detective" className='w-[500px] h-auto' />
            </div>
        </div>
    )
}

export default RideOffer