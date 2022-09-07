import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white h-screen mt-24' id='hero'>
        <div className="max-w-[800px] mx-auto mt-[-96px] h-screen text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold p-2'>
              GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              Grow with data.
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                  Fast, flexible, financing for 
                </p>
                <Typed 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop/>
            </div>
            <p className='md:text-2xl text-md font-bold text-gray-500 px-3'>
                Monitor your data analytics to increase revenue for BTB, BTC & SASS platform
            </p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Hero