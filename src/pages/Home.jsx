import React from 'react'
import Navbar from '../components/navbar'
import banner from '../assets/banner1.svg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar/>

        <div className='flex items-center justify-center font-montserrat font-bold text-5xl mt-10'>
            The Best Development Place For Your Business
        </div>

        <div className='flex items-center justify-center text-5xl font-montserrat font-bold text-red-500 mt-5'>
            Your Business        
        </div>

        <div className='grid grid-cols-2 px-10 mt-10'>
          <h6 className='mt-10 text-4xl font-montserrat px-10'>We Build Your Dream</h6>
          {/* <div className='flex'>
            <h6>Software</h6>
            <h6 className='text-red-500'>Easy</h6>

          </div> */}
        
          <div className=" ">
              <img 
                  src={banner}
                  className=''
                  alt='banner'
                />
          </div>
        </div>
        
      <Footer/>
    </div>
  )
}

export default Home
