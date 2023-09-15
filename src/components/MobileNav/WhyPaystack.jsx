
import {  useNavigate } from 'react-router-dom'
import logo from '../../assets/Frame.svg'
import {  X } from 'phosphor-react'


export const WhyPaystack = ({mob , setMob}) => {
 
const navigate = useNavigate()
  return (
    <div className='font-Roboto p-4 h-screen'>
     
     <div className="flex items-center justify-between pt-4 pb-6 lg:hidden relative">
    <img src={logo} alt="paystack-logo" />
      <X onClick={()=>setMob(!mob)} className="cursor-pointer" size={30}/>
    
      </div> 
     

<div >
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Why choose paystack</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Sucess Rate</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>Demo</p>
</div>
<div >
    <h3 className='font-thin text-sm'>YOUR GROWTH STAGE</h3>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Entreprenuer</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Corporates</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Global Brand</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For StartUps</p>
</div>
<div >
    <h3 className='font-thin text-sm'>YOUR BUSINESS TYPE</h3>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Fintechs</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Agents</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Schools</p>
    <p className=' hover:text-sky-500 cursor-pointer font-semibold text-lg py-2'>For Betting</p>
</div>

    </div>
  )
}
