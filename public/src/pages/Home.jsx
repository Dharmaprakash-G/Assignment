import React from 'react'
import Navbar from '../components/navbar'
import banner from '../assets/banner1.svg'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import Blogs from '../components/Blogs'
import Services from '../components/Services'
import Request from '../components/Request'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar/>

        <div className='flex items-center justify-center font-montserrat font-bold text-5xl mt-20'>
            The Best Development Place For Your Business
        </div>

        <div className='flex items-center justify-center text-5xl font-montserrat font-bold text-red-500 mt-5'>
            Your Business        
        </div>

        <div className="grid grid-cols-2 px-20 mt-20 mb-10  items-center">
        
          <div className=''>
            <h6 className="text-5xl font-montserrat font-bold mb-4">
              We Build Your Dream
            </h6>
            <div className='flex gap-3 font-bold font-montserrat text-5xl'>
              <h6 className="">Software</h6>
              <h6 className="text-red-500 mb-5">
                Easy
              </h6>
            </div>

            <div className='flex gap-3 font-montserrat mt-10'>
              <div class="h-[105px] w-1 bg-red-500 mt-2"></div>
              <div className='space-y-2'>
                <p>we are not just IT experts, we are your strategic partners in navigating the ever</p>
                <p>evolving landscape of technology and transformation. With a deep passion for </p>
                <p>innovation and a commitment to excellence, we empower businesses to harnessr</p>
                <p>the power of digital technology to drive growth and redefine their success.</p>
              </div>

            </div>

            <button className='mt-10 border-2 border-red-500 rounded-lg px-4 py-2 mb-5 transform transition-transform duration-300 hover:scale-105 '>
                  Get Started
            </button>           

          </div>         
        
          <div className=" ">
              <img 
                  src={banner}
                  className=''
                  alt='banner'
                />
          </div>
        </div>

        <Clients/>
        <AboutUs/>
        <Services/>
        <Products/>
        <Blogs/>
        <Reviews/>
        <Request/>
        
      <Footer/>
    </div>
  )
}

export default Home
