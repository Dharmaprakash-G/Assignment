import React from 'react'
import about from '../assets/aboutus.svg'

const AboutUs = () => {
  return (
    <div className='px-10 mt-20 mb-20'>
        <div className='grid grid-cols-2 gap-10 px-10'>
            <div className='mt-10'>
                <img src={about}/>
            </div>
            <div>
                <div className='text-5xl mb-10 font-montserrat'>About Us</div>
                <div className='text-3xl mb-5 font-poppins'>Empowering Success Through Excellence</div>
                <div className='text-3xl font-poppins'>Your Trusted Development </div>
                <div className='text-3xl mb-5 font-poppins'>Partner</div>
                <div className='mb-5 text-mutedGrayBlue font-poppins'>At KTG Software we specialize in driving innovation and excellence in the world of Information Technology. As your trusted technology partner, we bring a wealth of experience, cutting-edge solutions, and a commitment to your success.</div>
                <div className='text-mutedGrayBlue font-poppins'>We are a team of dedicated technologists, strategists, and problem solvers, united by a singular vision to transform businesses through the limitless possibilities of technology. With a rich blend of experience across industries, we bring fresh perspectives to every challenge.</div>
                <div>
                    <button className='mt-5 border-2 border-red-500 font-poppins rounded px-4 py-2 mb-5 transform transition-transform duration-300 hover:scale-105'>
                        Learn more
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
