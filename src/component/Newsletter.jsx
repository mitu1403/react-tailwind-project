import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4' id='Newsletter'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center" 
             data-aos="fade-up" 
             data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className='lg:col-span-2'>
                <h2 className=''>Want tips & tricks to optimize your flow?</h2>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your Email' />
                    <button className='ml-0 sm:ml-4 py-3'>Notify Me</button>
                </div>
                <p>
                    We care about the protection of your data. Read our  
                    <a href="#" className='text-[#00df9a] underline pl-2'>Privacy Policy.</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter