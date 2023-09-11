import React from 'react'
import headerImg from '../assets/svg.png'
import dominosSvg from '../assets/Dominos-Plain.svg.svg'
import mtnSvg from '../assets/MTN-Plain.svg.svg'
import boltSvg from '../assets/Bolt-Stack-Blue_200304_153027.svg.svg'
import axaSvg from '../assets/Axa-mansard-_-Plain.svg.svg'
import { Play } from 'phosphor-react'

const Hero = () => {
  return (
    <div className=' container m-auto text-primary-blue font-Robotos'>
    <div className='grid px-2  md:px-0  md:grid-cols-2 gap-14'> 
<div className='mt-12'>
 <h1 className=' text-4xl md:text-5xl font-bold py-6'>Modern online and offline  payments for Africa</h1>
 <p className='text-1xl md:text-2xl'>Paystack helps businesses in Africa get paid by anyone, anywhere in the world</p>
 <div className='flex items-center  gap-3 my-5'>
 <p className="bg-light-green py-2 px-4 rounded-md text-white cursor-pointer">
          Create Free Account
        </p>
      <p className='text-light-green'>or Contact Sales</p>
 </div>
    </div>
    <div className='w-full'> 
    <img src={headerImg}
    alt=""  className='w-full hidden lg:block '/>
    </div>
      
    </div>
    <div className='flex px-2 md:px-0  flex-col md:flex-row justify-between pb-6 '>
<div><p className='font-semibold pb-3'>Trusted by over 200,000 businesses</p>
<div className='flex py-4 md:py-0 md:items-center lg:justify-center gap-4 flex-wrap'>
  <img src={dominosSvg} alt="dominosSvg" />
  <img src={mtnSvg} alt="mtnSvg" />
  <img src={boltSvg} alt="boltSvg" />
  <img src={axaSvg} alt="axaSvg"  className='hidden md:block'/>
</div>
</div>
<div className='flex flex-col md:flex-row md:items-center gap-2 font-semibold'><p>Watch MTN Chief Transformation Officer, <br /> Olubayo Adekanmbi, discuss working with Paystack</p>  
<p className='flex items-center py-4 md:hidden text-sky-500'> <span><Play weight='fill'/></span> Play video</p>
<span className='bg-blue-600 p-3 rounded-full cursor-pointer hidden md:block'><Play weight='fill' color='#fff'/></span></div>
    </div>
    </div>
  )
}

export default Hero