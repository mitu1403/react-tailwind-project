import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    // setting mobile nav
    const [ nav, setNav ] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    // change nav color when scrolling
    const [ color, setColor ] = useState(false)
    const changeColor = () =>{
        if (window.scrollY > 0 ){
            setColor(true)
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)

  return (
    
        <div className={ color ? 'bg-[#000300] fixed w-full z-40 top-0 left-0 py-0 duration-500' 
                               : 'bg-transparent fixed w-full z-20 top-0 left-0 py-4 duration-500' } >
            <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4' id='navbar'>

                <p className='w-full font-bold text-3xl text-[#00df9a] cursor-pointer'>REACT.</p>

                <ul className='hidden md:flex'>
                    <li className='p-4 hover:text-[#00df9a] duration-700 hover:scale-105'><Link to="hero"       spy={true} smooth={true} offset={ 50}  duration={500}>Home      </Link></li>
                    <li className='p-4 hover:text-[#00df9a] duration-700 hover:scale-105'><Link to="analytics"  spy={true} smooth={true} offset={-100} duration={500}>Analytics </Link></li>
                    <li className='p-4 hover:text-[#00df9a] duration-700 hover:scale-105'><Link to="Newsletter" spy={true} smooth={true} offset={-100} duration={500}>Newsletter</Link></li>
                    <li className='p-4 hover:text-[#00df9a] duration-700 hover:scale-105'><Link to="Package"    spy={true} smooth={true} offset={-100} duration={500}>Package   </Link></li>
                    <li className='p-4 hover:text-[#00df9a] duration-700 hover:scale-105'><Link to="Contact"    spy={true} smooth={true} offset={-150} duration={500}>Contact   </Link></li>
                </ul>

                <div onClick={handleNav} className='flex md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[80%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-700' 
                                    : 'md:hidden fixed left-[-100%] top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-700'}>
                    <p className='w-full font-bold text-3xl text-[#00df9a] mt-[29.5px] mx-4'>REACT.</p>
                    <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-700'>Home</li>
                        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-700'>Company</li>
                        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-700'>Resources</li>
                        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-700'>About</li>
                        <li className='p-4 hover:text-[#00df9a] duration-700'>Contact</li>
                    </ul>
                </div>
            </div>
        </div> 
  )
}

export default Navbar