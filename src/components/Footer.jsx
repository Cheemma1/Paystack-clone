import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import React from 'react'
import MobFooter from './MobFooter'

const Footer = () => {
  return (
    <footer className='container m-auto md:py-14'>
        <div className="block md:hidden">
        <MobFooter/></div>
<div className='grid-cols-4 gap-4 hidden md:grid'>
        

<div>

<h2 className='font-bold font-Boing text-2xl'>Why Paystack</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Why Choose Paystack </a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Success rates</a></li>
    </ul> 
    <ul className='my-4 font-Roboto text-base'>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For Entrepreneurs</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For Corporates </a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For International Companies</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For Startups </a></li>
    </ul> 
    <ul>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For Fintech</a> </li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">For School</a> </li>
 <li className='hover:text-sky-500 cursor-pointer py-1'><a href="#">For Betting</a></li>

    </ul> 
</div>

<div>
<h2 className='font-bold font-Boing text-2xl'>Pricing</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Nigeria </a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Ghana</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">South Africa</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Kenya</a></li>
    </ul> 
    <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Customers</h2>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Testimonials</a></li>
 
    </ul> 
    <ul>
    <h2 className='font-bold font-Boing text-2xl'>Learn</h2>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Blog</a> </li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Guide</a> </li>
 <li className='hover:text-sky-500 cursor-pointer py-1'><a href="#">Video Tutorial</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'><a href="#">Decode Fintech</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'><a href="#">Commerce</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'><a href="#">Terminal</a></li>

    </ul> 
</div>
<div>
<h2 className='font-bold font-Boing text-2xl'>Developers</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Overview </a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Documentations</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Integration</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Status Page</a></li>
    </ul> 
    <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Community</h2>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Service Partner Directory</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Nigeria Logos </a></li>
    </ul> 
    <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Support</h2>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Help Desk</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Contact Us</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Why i was debited</a></li>
    </ul> 
</div>
<div>
<h2 className='font-bold font-Boing text-2xl'>About</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="#">Company </a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Suscribe</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Compliance</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Carrers</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Media Kit</a></li>
 <li className='hover:text-sky-500 cursor-pointer py-1'> <a href="">Privacy & Terms</a></li>
 </ul>
</div>
</div>
<div className='w-full h-px bg-gray-300 my-10'></div>
<h2 className='font-bold font-Boing text-2xl block md:hidden px-4 md:px-0'>Contact</h2>
<div className='grid grid-cols-1 md:grid-cols-4 md:gap-20 px-4 md:px-0'>
<div className='py-4 md:py-0'> 
<a href="mailto:hello@paystack.com" className='text-sky-500 font-Roboto text-lg'>hello@paystack.com</a> 
<div className='flex items-center gap-3 my-3'>
    <a href="#" className='cursor-pointer'> <FacebookLogo weight='fill' color='#3D5E69' size={35}/></a> 
    <a href="#" className='cursor-pointer'><TwitterLogo weight='fill' color='#3D5E69' size={35}/></a>
<a href="#" className='cursor-pointer'><LinkedinLogo weight='fill' color='#3D5E69' size={35}/></a>
<a href="#" className='cursor-pointer'><InstagramLogo weight='fill' color='#3D5E69' size={35}/></a>
<a href="#" className='cursor-pointer'><YoutubeLogo weight='fill' color='#3D5E69' size={35}/></a>
</div>
</div>

   <div>
   <h2 className='font-bold font-Boing text-2xl'>Lagos</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='py-1'> 126 Joel Ogunnaike Street,</li>
 <li className='py-1'>Ikeja GRA, Ikeja,</li>
 <li className='py-1'>Lagos, Nigeria</li>
 <li className='py-1'><a href="tel:+234 163 16160" className='text-sky-500'>+234 163 16160</a></li>
    </ul> 
 <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Accra</h2>
 <li className='py-1'>AfricaWorks, </li>
 <li className='py-1'>35 Patrice Lumumba Road,</li>
 <li className='py-1'>Airport Residential Area,</li>
 <li className='py-1'>Accra, Ghana</li>

    </ul> 
   </div>

   <div>
   <h2 className='font-bold font-Boing text-2xl'>San Francisco</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='py-1'>354 Oyster Point Blvd.,</li>
 <li className='py-1'>South San Francisco,</li>
 <li className='py-1'>CA 94080</li>
 <li className='py-1'>United States</li>
    </ul> 

    <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Dubai</h2>
 <li className='py-1'>Office 215,</li>
 <li className='py-1'>Building 3,</li>
 <li className='py-1'>Dubai Internet City, Dubai,</li>
 <li className='py-1'>United Arab Emirates</li>

    </ul> 
   </div>

   <div>
   <h2 className='font-bold font-Boing text-2xl'>Cape Town</h2>
   <ul className='my-4 font-Roboto text-base'>
 <li className='py-1'>Wework (1st Floor),</li>
 <li className='py-1'>80 Strand Street,</li>
 <li className='py-1'>Cape Town City Centre,</li>
 <li className='py-1'>Cape Town, 8001,</li>
 <li className='py-1'>South Africa</li>
    </ul> 

    <ul className='my-4 font-Roboto text-base'>
    <h2 className='font-bold font-Boing text-2xl'>Johannesburg</h2>
 <li className='py-1'>45 Kingfisher Drive,</li>
 <li className='py-1'>Fourways,</li>
 <li className='py-1'>Johannesburg,</li>
 <li className='py-1'>South Africa</li>

    </ul> 
   </div>
   </div>


    </footer>
  )
}

export default Footer