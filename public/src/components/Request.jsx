import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";





const Request = () => {

    
        const [selectedOrg, setSelectedOrg] = useState("");
      
        const organizations = ["Organization A", "Organization B", "Organization C"];
      
        const handleSelectChange = (event) => {
          setSelectedOrg(event.target.value);
        };
    



  return (
    <div className='absolute mt-[-300px]'>

    
    <div className='border-transparent bg-gray-50 shadow-lg rounded-lg ml-20 mr-20 '>
    
      <div className='grid grid-cols-3 p-10 gap-10'>

        <div className='col-span-1'>
            <div className='flex'>
                <div className='space-y-5 p-10'>
                    <div className='text-4xl font-montserrat'>Request a Call Back</div>
                    <div className='text-mutedGrayBlue font-poppins'>Thank You for reaching out to iTech! please fill the form right. Our team will contact you shortly.</div>
                </div>           
                <div class="h-[265px] w-[1px] bg-black mt-2"></div>
                
            </div>
        </div>

        <div className='col-span-2 font-poppins '>
            <form>
                <div className='grid grid-cols-2 grid-rows-2 gap-8'>
                    <div className='grid'>
                        <input
                            type='name'
                            name='name'
                            placeholder='Name'
                            className='border border-gray-300 p-3 mt-2 rounded-md '
                        />
                    </div>
                    <div className='grid'>
                        <input
                            type='number'
                            name='number'
                            placeholder='Phone'
                            className='border border-gray-300 p-3 mt-2 rounded-md '
                        />
                    </div>
                    <div className='grid'>
                        <input
                            type='email'
                            name='email'
                            placeholder='Enter yours Email'
                            className='border border-gray-300 p-3 mt-2 rounded-md '
                        />
                    </div>


                    <div className="grid">
                        <select
                            value={selectedOrg}
                            onChange={handleSelectChange}
                            className="border border-gray-300 p-3 mt-2 rounded-md text-gray-400"
                        >
                            <option value="" disabled hidden>
                            Select Organization
                            </option>
                            {organizations.map((org, index) => (
                            <option key={index} value={org} className="text-gray-900">
                                {org}
                            </option>
                            ))}
                        </select>
                    </div>

                    
                </div>
                    <div className='mt-8'>
                        <input
                            type='name'
                            name='message'
                            placeholder='Message'
                            className='border border-gray-300 p-3 mt-2 rounded-md w-full h-[70px] '
                        />
                    </div>
                    <button className='mt-3 border border-red-500 rounded px-4 py-2 '>
                        Submit
                    </button>
            </form>
            
        </div>
      </div>
    </div>

    </div>
  )
}

export default Request