import React from 'react'
import img1 from '../../assets/blog_db.svg'
import img2 from '../../assets/guides_db.svg'
import img3 from '../../assets/tutorials_db.svg'
import img4 from '../../assets/decode_fintech_db.svg'

const Learn = () => {

    
  return (
    <div className="origin-top-left absolute left-12  top-10 mt-4 w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-between  text-primary-blue">
    <div className='p-3'>
      <div className="flex gap-3 pb-4 cursor-pointer">
     <img src={img1} alt="why-choose-db" className='w-10' />
        <div>
          <h2 className='hover:text-sky-500'>Blogs</h2>
          <p className='font-thin w-9/12'>
          Original  lessons about making internet work for your business
          </p>
        </div>
</div>
        <div className="flex items-center gap-3 pb-4 cursor-pointer">
        <img src={img2} alt="success-db"  className='w-10' />
        <div>
          <h2 className='hover:text-sky-500'>Guide</h2>
          <p className='font-thin w-9/12'>
          Big idea in payment explained in simple English
          </p>
        </div>
        </div>

        <div className="flex items-center gap-3 pb-4 cursor-pointer">
        <img src={img3} alt="demo-db"  className='w-10' />
        <div>
          <h2 className='hover:text-sky-500'>Video Tutorials</h2>
          <p className='font-thin w-9/12'>
          Quick Paystack checkout form and Dashboard in action
          </p>
        </div> 
        </div>

        <div className="flex items-center gap-3 pb-4 cursor-pointer">
        <img src={img4} alt="demo-db"  className='w-10' />
        <div>
          <h2 className='hover:text-sky-500'>Decode Finetech</h2>
          <p className='font-thin w-9/12'>
       The trade email newsletter and podcast for leaders in African fintech
          </p>
        </div> 
        </div>

    </div>



    <div>

      <div className='bg-slate-200 px-4 h-full' >
          <ul className=' pb-3'>
          <p className='font-thin text-sm pt-5 pb-2'>COMPANY</p>
       <li className='cursor-pointer hover:text-sky-500 pb-2'>About Us</li>   
       <li className='cursor-pointer hover:text-sky-500 pb-2'>Suscribe</li>   
       <li className='cursor-pointer hover:text-sky-500 pb-2'>Complaince</li>   
       <li className='cursor-pointer hover:text-sky-500 pb-2'>Carrers</li>   
       <li className='cursor-pointer hover:text-sky-500 pb-2'>Brands</li> 
       <li className='cursor-pointer hover:text-sky-500 pb-2'>Media Kit</li>   
          </ul>
          
          </div>
    </div>
  </div>
  )
}

export default Learn