import React from 'react'

function Information() {

    const details = [
        {
            icon: "",
            title: "Your pick of rides at low prices",
            description: "No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices."
        },
        {
            icon: "",
            title: "Trust who you travel with",
            description: "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform."
        },
        {
            icon: "",
            title: "Scroll, click, tap and go!",
            description: "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes."
        }
    ]
    return (
        <div className='py-10'>
            <div className="flex w-[80%] mx-auto">
                {
                    details?.map((item) => {
                        return (
                            <>
                                <div className="p-4">
                                    <h3 className='text-16 font-600'>{item.title}</h3>
                                    <p className='text-14 text-secondary font-500'>{item.description}</p>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Information