import { X } from 'phosphor-react'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import logo from '../../assets/Frame.svg'

const DevelopersMob = () => {
    const navigate = useNavigate()
  return (
    <div className='font-Roboto p-4 h-screen'>
     
    <div className="flex items-center justify-between pt-4 pb-6 lg:hidden relative">
   <img src={logo} alt="paystack-logo" />
     <X  onClick={()=>navigate("/")} className="cursor-pointer" size={30}/>
   
     </div> 
     

<div >
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>OverView</p>
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Documentation</p>
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Intergrations</p>
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Status</p>
  
</div>


   </div>
  )
}

export default DevelopersMob