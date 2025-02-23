import React from 'react'

function WhereGo() {
    const cityList = [
        {
            start: "New Delhi",
            end: "Chandigarh"
        },
        {
            start: "New Delhi",
            end: "Jaipur"
        },
        {
            start: "New Delhi",
            end: "Agra"
        }
    ]
    return (
        <div className='bg-blue py-6'>
            <div className="w-[992px] mx-auto">
                <h2 className='text-white font-600 text-32'>Where do you want to go?</h2>
                <div className="grid grid-cols-3 gap-5 mt-3">
                    {
                        cityList && cityList.map((item) => {
                            return (
                                <>
                                    <div className="flex bg-white px-5 py-7 rounded-20">
                                        <span className=' text-16 font-600 text-blue'>{item.start}</span>
                                        <span className='text-16 font-600 text-blue'>{item.end}</span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WhereGo