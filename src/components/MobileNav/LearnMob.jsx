import { X } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Frame.svg'

const LearnMob = () => {
  const navigate = useNavigate()
  return (
    <div className='font-Roboto p-4 h-screen'>
     
     <div className="flex items-center justify-between pt-4 pb-6 lg:hidden relative">
    <img src={logo} alt="paystack-logo" />
      <X onClick={()=>navigate("/")} className="cursor-pointer" size={30}/>
    
      </div> 
       

<div >
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Blog</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Guide</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'> Video Tutorial</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Decode Fintech</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'> Commerce</p>
</div>
<div >
    <h3 className='font-thin text-sm'>COMPANY</h3>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>About Us</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Complaince</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Careers</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Brand</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Media Kit</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Privacy and Terms</p>
</div>


    </div>
  )
}

export default LearnMob