import { CaretRight, Check } from 'phosphor-react'
import image1 from '../assets/Robust-Suite-of-APIs-Opt.png.png'
import React from 'react'

const BuildApi = () => {
  return (
    <div className='container m-auto  font-Roboto  text-primary-blue py-28 px-4 md:px-0'>
<div className='grid grid-cols-1 md:grid-cols-2'>
<div className='' >
<h1 className='text-4xl font-bold pb-3 md:w-3/4'>Build custom  payment experiences with well-documented APIs</h1>
<p className='py-5 md:w-3/4'>Developers love our thorough, well-documented  APIs that let you to build everything from simple weekend   projects, to complex financial products serving hundreds  of thousands of customers. If you can imagine it, you can build it with Paystack</p>

<ul  className=''> <li className='flex items-center py-5'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span> Collect one-time and recurring payments from your app or website</li>
<li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Make instant transfers</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span>Retrieve all your transaction and customer data
</li>
 <li className='flex items-center pb-2'> <span className='bg-check-green  text-light-green p-2 '><Check weight='fill'/> </span> Verify the identity of customers
</li>

</ul>
<p className='text-light-green flex items-center gap-2'> <span className='border-2'><CaretRight/></span> Paystack API Quickstart</p>
</div>

<div className='w-full -order-1  md:order-1 '>
   <img src={image1} alt="" className=' mb-10'/> 
</div>
</div>
    </div>
  )
}

export default BuildApi