import React from 'react'
import gif from '../assets/Collect-Payments-for-Multiple-Channels-1.1.gif'
import { CaretRight, Check } from 'phosphor-react'

const GifSection = () => {
  return (
    <div className=' container m-auto text-primary-blue mt-28 px-4 md:px-0'>
        <div className='py-4'>
<h1 className=' text-3xl lg:text-5xl font-bold pb-1 font-Boing'>Simple, easy payments</h1>
<p className='text-lg font-Roboto'>Building a business is hard. Getting paid shouldn't be.</p>
</div>
<div className ='flex  flex-col md:flex-row items-center justify-between md:gap-32'>
    <div  className=' md:w-3/4'>
<img src={gif} alt=""  className='w-full'/></div>
<div className='mt-10 w-full'>
    <h2 className=' text-3xl md:text-5xl font-bold md:w-3/4 font-Boing'>Delight customers with a  seamless payments  experience</h2>
    <p className='py-3 md:w-3/4'>Give your customers the gift of modern, frictionless ,painless payments. Integrate Paystack once and let customers pay you however they want.</p>

    <div className='flex flex-col md:flex-row md:items-center md:gap-10'>
<ul  className=''> <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span> Card</li>
<li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Bank Account</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Bank Transfer</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span> USSD</li>

</ul>
<ul  className=''> <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span> Apple Pay</li>
<li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Visa QR</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Mobile Money</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>POS</li>

</ul>

    </div>
    <div className='pt-10 md:py-6 '>
         <h2 className='text-4xl font-bold font-Boing lg:w-3/4'>Enjoy phenomenal  transaction success rates</h2>
    
    <p className='py-3 lg:w-3/4 font-Roboto'>We automatically route payments through the most optimal channels, ensuring the highest transaction  success rates in the market.</p>
    <p className='text-light-green flex items-center gap-2'> <span className='border-2 border-light-green rounded-full text-light-green'><CaretRight/></span> Find out how we achieve high success rates</p>
    </div>
</div> 

</div>

    </div>
  )
}

export default GifSection