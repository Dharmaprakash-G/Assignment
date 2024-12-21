import React from 'react'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.png'
import pd from '../assets/pd.png'

const Products = () => {
  return (
    <div className='px-10 mt-10 space-y-10 mb-20'>
        <h6 className='flex items-center justify-center font-semibold text-5xl mb-20'>Our Products</h6>
        <div className='grid grid-cols-2 gap-10 px-10'>
            <div className=''>
                <img src={p1}/>
            </div>
            <div className='space-y-5 mt-20'>
                <div className='text-3xl text-red-500 font-poppins'>Asset Tracking & Management System</div>
                <div className=' mb-5 font-poppins font-semibold'>From Conceptualization to Integration</div>
                <div className='font-poppins text-mutedGrayBlue'>The asset registry serves as the central database or repository where information about all assets are stored. This includes details such as asset ID, description, location, purchase date, warranty information, maintenance history and depreciation values.</div>               
            </div>
        </div>

        <div className='grid grid-cols-2 gap-10 px-10'>
            <div className='space-y-5 mt-20'>
                <div className='text-3xl text-red-500 font-poppins'>Traceability</div>
                <div className=' mb-5 font-poppins font-semibold'>Trace, Track & Movement of the Products</div>
                <div className='font-poppins text-mutedGrayBlue'>Traceability in industries refers to the ability to track and trace the movement of products, components or materials throughout the supply chain or production process. It involves recording and documenting the flow of these items from their origin to their final destination, enabling stakeholders to identify and trace their journey at any point in time. Our traceability systems typically rely on unique identifiers, such as serial numbers, batch numbers, barcode, QR code or RFID tags, to associate each item with its relevant information.</div>               
            </div>
            <div className='px-7'>
                <img src={p2}/>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-10 px-10'>
            <div className=''>
                <img src={p3}/>
            </div>
            <div className='space-y-5 mt-20'>
                <div className='text-3xl text-red-500 font-poppins'>IoT</div>
                <div className=' mb-5 font-poppins font-semibold'>From Conceptualization to Deploymentn</div>
                <div className='font-poppins text-mutedGrayBlue'>The assessment and planning phase is crucial for identifying the specific goals and outcomes that a particular industry seeks to achieve with IoT implementations. At KTG, we understand that each industry has its unique challenges, opportunities, and objectives when it comes to adopting IoT solutions. Conducting feasibility studies towards ROI of IoT solutions with factors such as infrastructure readiness, data connectivity, sensor technologies and integration with existing systems is very important. </div>               
            </div>
        </div>
        
        <div>
            <img 
                src={pd}
                className='px-20 mt-20'
            />
        </div>
        
      
    </div>
  )
}

export default Products
