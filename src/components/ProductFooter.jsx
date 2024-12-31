import React from 'react'

import rocket from '../assets/Rocket.png'

const ProductFooter = () => {
  return (
    <div className='lg:px-20 px-20 '>
        <div className='bg-customTeal w-full rounded-md p-10 text-white font-poppins'>
            <div className='lg:grid grid-cols-3 '>
                <div className='lg:text-3xl text-xl  p-5 lg:mt-10 lg:ml-10 md:text-2xl'>Accelerate your business growth with our expertise</div>
                <div className='flex  items-center justify-center'>
                    <img
                        src={rocket}
                        className='lg:h-[250px] hidden lg:block '
                        
                    />
                </div>
                <div className='p-5 lg:text-xl lg:mt-[100px]'>
                    Our Commitment to your business growth allows you to optimize your time and resource
                    
                <div className='p-5'>
                    <button className='p-2 bg-white text-black rounded-md'>Contact Us</button>
                </div>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default ProductFooter
