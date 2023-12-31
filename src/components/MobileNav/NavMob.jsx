import { CaretDown, X } from 'phosphor-react'
import { Link} from 'react-router-dom'
import NavHeader from './NavHeader'


const NavMob = ({mob, setMob} ) => {



  return (
    <div className='fixed top-0 left-0   bottom-0 bg-slate-50 h-screen w-full '>
      <div className='flex items-center justify-between '>
      <NavHeader/>
    
   <X onClick={()=>setMob(!mob)} 
      className="cursor-pointer" size={30}/> 
      
      </div>
<div className='px-4 py-4'>
<Link to={"/why"}> <p className="flex items-center justify-between gap-1 cursor-pointer  pb-3 hover:text-sky-500" > Why paystack <CaretDown weight="fill" /> </p></Link>

<p className=" cursor-pointer hover:text-sky-500 pb-3 " > Customer </p>
<p className=" cursor-pointer hover:text-sky-500 pb-3 hover" > Pricing </p>
<Link to={"/learn"}> <p className="flex items-center justify-between gap-1 cursor-pointer hover:text-sky-500 pb-3 " > Learn <CaretDown weight="fill" /> </p></Link>
<Link to={"/dev"}> <p className="flex items-center justify-between gap-1 cursor-pointer hover:text-sky-500 pb-3 " >Developers<CaretDown weight="fill" /> </p></Link>
<Link to={"/support"}> <p className="flex items-center justify-between gap-1 cursor-pointer hover:text-sky-500 pb-3 " > Support <CaretDown weight="fill" /> </p></Link>
<p className=" cursor-pointer hover:text-sky-500 pb-3 " > Login </p>
<p className="bg-light-green p-2 rounded-md text-white cursor-pointer w-full my-3 text-center ">
          Create Free Account
        </p>
</div>

    </div>
  )
}

export default NavMob