import React from 'react'
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/4.jpg'

const Branche = () => {
  return (
    <div className='w-full py-16 px-4 max-w-[1240px] mx-auto'>
        <div className="text-white md:text-slate-400">
            <div className="grid grid-rows-2 lg:grid-cols-2 lg:space-x-10 items-center" 
                data-aos="fade-up" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div className='space-y-10 row-start-2 lg:row-start-1 flex flex-col sm:flex-row  flex-wrap lg:grid justify-between -mt-10 '>
                    <div className='sm:pt-16  relative -mt-24 sm:-mt-0 ml-3 sm:ml-0 '>
                        <p className='font-semibold text-md sm:text-md '>Entire Office</p>
                        <h1 className='text-white text-xl sm:text-2xl font-bold'>Branch in Collingwood</h1>
                    </div>
                    <div className='hidden sm:block'>
                        <button>Check availability</button>
                    </div>
                    <div className='pt-6 sm:pt-0'>
                        <p>This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.</p>
                    </div>
                    <div className='block sm:hidden'>
                        <button>Check availability</button>
                    </div>
                </div>                
                <div className="grid grid-cols-4 lg:grid-cols-2 gap-4 lg:gap-8">
                    <img src={pic1} alt="" className='mb-10 sm:mb-0 h-56 w-full rounded-md object-cover col-span-4 sm:col-span-2 opacity-25 sm:opacity-100 hover:scale-95 duration-700'/>
                    <img src={pic2} alt="" className='h-56 lg:h-40 w-full rounded-md sm:col-span-2 md:col-span-1 hidden sm:block hover:scale-95 duration-700'/>
                    <img src={pic3} alt="" className='h-56 lg:h-40 w-full rounded-md hidden md:block hover:scale-95 duration-700'/>
                </div>                
            </div>          
        </div>
    </div>
  )
}

export default Branche