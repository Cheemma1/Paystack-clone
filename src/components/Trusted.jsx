import React from 'react'
import icon1 from '../assets/For-International-Businesses_180823_165939.svg.svg'
import icon2 from '../assets/For-Entrepreneurs_180823_165709.svg.svg'
import icon3 from '../assets/For-Large-Corporations_180823_165502.svg.svg'
import { CaretRight } from 'phosphor-react'

const Trusted = () => {
  return (
    <div className='bg-trusted-pattern w-full bg-center bg-cover pt-20 pb-36 px-4 bg-sky-100 md:px-6'>
<div className='py-20'>
  <h2 className='font-bold font-Boing text-5xl md:w-1/2 pb-4 '>Trusted by 200,000+ businesses</h2>
    <p className='font-Roboto text-2xl '>Thousands of organizations of all sizes trust Paystack to grow their  business.

</p>
</div>

<div className='flex items-center flex-col  justify-center gap-3  md:flex-row pb-6'>
<div className='bg-white shadow-xl rounded-md p-6 w-full md:w-1/2 h-96  md:h-auto lg:h-96'>

<img src={icon1} alt="" />
<h2 className='font-bold font-Boing text-3xl w-3/5 pt-4'>Paystack for
Global Brands</h2>
<p className='py-4 md:w-3/4 font-Roboto'>We help global brands accept payments from across Africa</p>
<p className='flex items-center gap-2'> <span className='border-2 border-light-green rounded-full text-light-green'><CaretRight/> </span>learn more</p>
</div>
<div className='bg-white shadow-xl rounded-md p-6  w-full md:w-1/2 h-96 md:h-auto lg:h-96'>
<img src={icon2} alt="" />
<h2 className='font-bold font-Boing text-3xl md:w-3/4 pt-4'>Paystack for
Entrepreneurs</h2>
<p className='py-4 md:w-4/5 font-Roboto'>From startup to scale-up, we can support you at every stage of your businesses’ growth

</p>
<p className='flex items-center gap-2'> <span className='border-2 border-light-green rounded-full text-light-green'><CaretRight/> </span>learn more</p>
</div>
<div className='bg-white shadow-xl rounded-md p-6 w-full   md:w-1/2 h-96 md:h-auto lg:h-96'>
<img src={icon3} alt="" />
<h2 className='font-bold font-Boing text-3xl pt-4'>Paystack for
Large Organizations
</h2>
<p className='py-4 font-Roboto'>Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely.</p>
<p className='flex items-center gap-2 pb-4'> <span className='border-2 border-light-green rounded-full text-light-green'><CaretRight/> </span>learn more</p>
</div>

</div>
    </div>
  )
}

export default Trusted