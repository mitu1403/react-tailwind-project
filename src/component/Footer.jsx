import React from 'react'
import { 
    FaFacebookSquare,
    FaGithubSquare,
    FaGooglePlusSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 pb-10 grid lg:grid-cols-3 gap-8 text-gray-300 lg:-mt-56' id='Contact'>
      <div>
        <p className="w-full font-bold text-3xl text-[#00df9a]">REACT.</p>
        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum saepe nisi reprehenderit quidem ad tempora. </p>
        <div className='flex justify-between w-[70%] sm:w-[30%] md:w-[50%] space-x-0 sm:space-x-1 my-6 cursor-pointer'>
          <FaFacebookSquare size={30} className="hover:text-white duration-700 hover:scale-105"/>
          <FaGithubSquare size={30} className="hover:text-white duration-700 hover:scale-105"/>
          <FaGooglePlusSquare size={30} className="hover:text-white duration-700 hover:scale-105"/>
          <FaInstagramSquare size={30} className="hover:text-white duration-700 hover:scale-105"/>
          <FaTwitterSquare  size={30} className="hover:text-white duration-700 hover:scale-105"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className='font-medium text-gray-400 pb-4'>Solutions</h6>
          <ul className='text-sm space-y-2'>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 pb-4'>Supports</h6>
          <ul className='text-sm space-y-2'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 pb-4'>Solutions</h6>
          <ul className='text-sm space-y-2'>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer