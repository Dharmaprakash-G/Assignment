import React from 'react'
import logo from '../assets/logo2.png'
import call from '../assets/call-calling.png'
import sms from '../assets/sms-tracking.png'



const Footer = () => {
  return (
    <footer className=' w-full bg-customBlue  px-4 md:px-20 lg:px-28 font-poppins py-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3' >
            <div className='mt-10'>
                <img src={logo}/>
                <div className='text-white font-montserrat mt-10 text-md'>
                    <p>SF No.347/2, Om Namasivaya Nagar,</p>
                    <p>Thudiyalur Rd, Saravanampatti, </p>
                    <p>Coimbatore, Tamil Nadu 641035</p>
                </div>
                <div className='text-white font-montserrat mt-7 text-md flex gap-2'>
                    <img src={call} />
                    <p>+91 9955884757</p>
                </div>
                <div className='text-white font-montserrat mt-4 text-md flex gap-2'>
                    <img src={sms} />
                    <p>info@itechsoftware.com</p>
                </div>
            </div>

            <div className='text-white mt-20'>
                <h2 className='text-lg font-montserrat'>Quick Links</h2>
                <ul className='mt-9 px-2 space-y-4'>
                    <li><a href=''></a>About Us</li>
                    <li><a href='' ></a>Clients</li>
                    <li><a href=''></a>Use Case</li>
                    <li><a href=''></a>Blogs</li>
                    <li><a href=''></a>Career</li>
                    <li><a href=''></a>Contact Us</li>                  
                </ul>
            </div>
            
            <div className='text-white mt-20'>
                <h2 className='text-lg font-montserrat'>Services</h2>
                <ul className='mt-9 px-2 space-y-4'>
                    <li><a href=''></a>Digital Transformation</li>
                    <li><a href='' ></a>IoT</li>
                    <li><a href=''></a>Facility Management</li>
                    <li><a href=''></a>AI & ML</li>
                    <li><a href=''></a>Asset Tracking</li>
                    <li><a href=''></a>Business Intelligence</li>                  
                </ul>
            </div>
            
            <div className='text-white mt-20'>
                <h2 className='text-lg font-montserrat'>Products</h2>
                <ul className='mt-9 px-2 space-y-4'>
                    <li><a href=''></a>Asset Tracking & Management System</li>
                    <li><a href='' ></a>IoT</li>
                    <li><a href=''></a>Traceability</li>                 
                </ul>
            </div>
            
            

        </div>   

        <hr class="border-t-2 border-gray-300 my-3 mt-8" />

        <div className='text-white text-md py-4 flex'> 
            <p>Copyright © 2024 iTech Software Group</p>
            <div className='flex items-end justify-end ml-auto space-x-4'>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
        </div>   
    </footer>
  )
}

export default Footer
