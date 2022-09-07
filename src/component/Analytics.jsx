import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='analytics'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className='relative before:block before:absolute before:-inset-2 before:-rotate-2 before:bg-gray-200 before:opacity-30' 
                 data-aos="fade-up" 
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
                <img className='relative w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            </div>
            
            <div className='flex flex-col justify-center z-20' 
                 data-aos="fade-up" 
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
                <p className='uppercase text-[#00df9a] font-bold'>
                    Data Analytics dashboard
                </p>
                <h2>Manage Data Analytics Centrally</h2>
                <p className='text-sm text-gray-800 font-semibold py-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam in soluta eos incidunt non ex, repellendus minus obcaecati praesentium! At, 
                    voluptate eveniet. A amet debitis eum? Consequuntur aperiam cumque alias.
                </p>
                <button className='w-[150px] md:mx-0 text-[#00df9a]  bg-black hover:text-white hover:bg-emerald-500 duration-500 shadow-2xl'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics