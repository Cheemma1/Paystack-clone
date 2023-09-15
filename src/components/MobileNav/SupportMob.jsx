import { X } from 'phosphor-react'
import {  useNavigate } from 'react-router-dom'
import logo from '../../assets/Frame.svg'

const SupportMob = () => {
    const navigate = useNavigate()
  return (
    <div className='font-Roboto p-4 h-screen'>
     
    <div className="flex items-center justify-between pt-4 pb-6 lg:hidden relative">
   <img src={logo} alt="paystack-logo" />
     <X  onClick={()=>navigate("/")} className="cursor-pointer" size={30}/>
   
     </div> 
     

<div >
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Quick Help</p>
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Contact Us</p>
   <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Why i was Debited?</p>
  
</div>


   </div>
   
  )
}

export default SupportMob