import React from 'react'
import { GoArrowRight } from "react-icons/go";

import bl1 from '../assets/bl1.png'
import bl2 from '../assets/bl2.png'
import bl3 from '../assets/bl3.png'

const Blogs = () => {
  return (
    <div className='px-20 mt-20 mb-20'>
      
      <div className='text-5xl font-montserrat mb-10'>Blogs</div>
      <div className='text-3xl font-poppins'>Explore Our Latest </div>
      <div className='text-3xl font-poppins mb-5'>Blogs</div>

      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border-2 rounded-lg p-5 space-y-4 transform transition-transform duration-300 hover:scale-105'>
          <img src={bl1} className="w-full h-auto" />
          <div className='text-mutedGrayBlue'>April 16, 2024 - Tech</div>
          <div className='font-semibold'>The Art of Seamless Web Development</div>
          <div className='text-mutedGrayBlue'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </div>
          <div>
            <button className='flex mt-5 border-2 border-red-500 font-poppins rounded px-4 py-2'>
              Read More <GoArrowRight className="relative top-1" />
            </button>
          </div>
        </div>

        <div className='border-2 rounded-lg p-5 space-y-4 transform transition-transform duration-300 hover:scale-105'>
          <img src={bl2} className="w-full h-auto" />
          <div className='text-mutedGrayBlue'>April 26, 2024 - Tech</div>
          <div className='font-semibold'>How Created Incredible UI/UX Design</div>
          <div className='text-mutedGrayBlue'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </div>
          <div>
            <button className='flex mt-5 border-2 border-red-500 font-poppins rounded px-4 py-2'>
              Read More <GoArrowRight className="relative top-1" />
            </button>
          </div>
        </div>

        <div className='border-2 rounded-lg p-5 space-y-4 transform transition-transform duration-300 hover:scale-105'>
          <img src={bl3} className="w-full h-auto" />
          <div className='text-mutedGrayBlue'>April 28, 2024 - Tech</div>
          <div className='font-semibold'>Supporting Startups and Entrepreneurship</div>
          <div className='text-mutedGrayBlue'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </div>
          <div>
            <button className='flex mt-5 border-2 border-red-500 font-poppins rounded px-4 py-2'>
              Read More <GoArrowRight className="relative top-1" />
            </button>
          </div>
        </div>
      </div>
      
      <div className='mb-36'>
        
      </div>
    </div>
  )
}

export default Blogs
