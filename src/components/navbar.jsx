import React from 'react'
import logo from "../assets/logo.png"
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  return (

    <nav className='bg-#FFFFFF px-14'>
        <div className='max-w mx-auto '>
            <div className='flex items-center justify-between h-20'>
                <div className='flex-shrink-0'>
                    <a href='/'>
                        <img 
                            src={logo} 
                            alt='logo' 
                            className='h-15'
                        />
                    </a>                  
                </div>

                <div className='flex items-center justify-center space-x-10 text-xl font-montserrat mt-3'>
                    <a href="#" >Home</a>
                    <a href="#" >About Us</a>
                    <a href="#" className="flex items-center space-x-1">
                        <span>Services</span>
                        <SlArrowDown size={14}/>
                    </a>
                    <a href="#" className="flex items-center space-x-1">
                        <span>Products</span>
                        <SlArrowDown size={14}/>
                    </a>
                    <a href="#" className="flex items-center space-x-1">
                        <span>Use Case</span>
                        <SlArrowDown size={14}/>
                    </a>
                    
                    <a href="#" >Clients</a>
                    <a href="#" >Career</a>
                </div>

                <button className='mt-3 border border-black rounded px-4 py-2 '>
                    Contact Us
                </button>

            </div>
        </div>

    </nav>
  )
}

export default Navbar;
