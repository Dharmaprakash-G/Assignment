import React from 'react';
import about from '../assets/aboutus.svg';

const AboutUs = () => {
  return (
    <div className='px-6 sm:px-10 mt-20 mb-20'>
      <div className='lg:grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 px-6 sm:px-10'>
        
        <div className='mt-10'>
          <img src={about} className='w-full h-auto' alt='About Us' />
        </div>

        
        <div>
          <div className='text-3xl md:mt-20 sm:text-4xl md:text-5xl mb-6 font-montserrat'>
            About Us
          </div>
          <div className='text-xl sm:text-2xl mb-4 font-poppins'>
            Empowering Success Through Excellence
          </div>
          <div className='text-xl sm:text-2xl font-poppins'>
            Your Trusted Development
          </div>
          <div className='text-xl sm:text-2xl mb-4 font-poppins'>
            Partner
          </div>

            <div className='text-justify'>            
                <p className='mb-5 text-mutedGrayBlue font-poppins text-sm sm:text-base'>
                    At KTG Software we specialize in driving innovation and excellence in the world of Information Technology. As your trusted technology partner, we bring a wealth of experience, cutting-edge solutions, and a commitment to your success.
                </p>
                <p className='text-mutedGrayBlue font-poppins text-sm sm:text-base'>
                    We are a team of dedicated technologists, strategists, and problem solvers, united by a singular vision to transform businesses through the limitless possibilities of technology. With a rich blend of experience across industries, we bring fresh perspectives to every challenge.
                </p>
          </div>
          
          <div>
            <button className='mt-5 border-2 border-red-500 font-poppins rounded px-6 py-3 mb-5 transform transition-transform duration-300 hover:scale-105'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
