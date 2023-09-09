
import img1 from '../../assets/why_choose_paystack_db.svg'
import img2 from '../../assets/success_rates_db.svg'
import img3 from '../../assets/demo_db.svg'
import React from "react";

const Open = () => {
  return (
    <div className="origin-top-left absolute left-12  top-10 mt-4 w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex  items-center justify-between text-primary-blue">
      <div className='px-2'>
        <div className="flex gap-3 pb-4 cursor-pointer">
       <img src={img1} alt="why-choose-db" className='w-10' />
          <div>
            <h2 className='hover:text-sky-500'>Why Choose PayStack</h2>
            <p className='font-thin w-9/12'>
            Over 200,000 business trust paystack. Here's why
            </p>
          </div>
</div>
          <div className="flex items-center gap-3 pb-4 cursor-pointer">
          <img src={img2} alt="success-db"  className='w-10' />
          <div>
            <h2 className='hover:text-sky-500'>Success Rate</h2>
            <p className='font-thin w-9/12'>
            Get the best transaction rate in the industry
            </p>
          </div>
          </div>

          <div className="flex items-center gap-3 pb-4 cursor-pointer">
          <img src={img3} alt="demo-db"  className='w-10' />
          <div>
            <h2 className='hover:text-sky-500'>Demo</h2>
            <p className='font-thin w-9/12'>
           See Paystack checkout form and Dashboard in action
            </p>
          </div> 
          </div>


      </div>



      <div>

        <div className='bg-slate-200 px-3' >
            <ul className='pb-3 '>
            <p className='font-thin text-sm py-2'>YOUR GROWTH STAGE</p>
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Entreprenuer</li>   
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Corprates </li>   
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Global Brands</li>   
         <li className='cursor-pointer hover:text-sky-500 pb'>For Start ups</li>   
            </ul>

            <ul>
            <p className='font-thin text-sm pb-2'>YOUR BUSINESS TYPES</p>
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Fintech</li>   
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Agencies</li>   
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Schools</li>   
         <li className='cursor-pointer hover:text-sky-500 pb-2'>For Betting</li>   
            </ul>
            
            </div>
      </div>
    </div>
  );
};

export default Open;
