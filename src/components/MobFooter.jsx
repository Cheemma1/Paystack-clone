import { useState } from 'react'
import { list } from '../components/List'
import { CaretDown, CaretRight } from 'phosphor-react';

const MobFooter = () => {

    const [ans , setAns] = useState(Array(list.length).fill(false));

    const toggleIcon =(index)=>{
      const newAns =[...ans] 
      newAns[index] = !newAns[index]
      setAns(newAns)
    }
  return (
    <div className='mt-16'>
{ list.map((faq, index)=>(

<div key={index}>
<div onClick={()=>toggleIcon(index)} className='flex items-center justify-between px-4 py-2 cursor-pointer'>
  <h3 className='font-Roboto font-semibold text-lg '>{faq.heading}</h3> 
  {ans[index] ? <CaretDown weight='fill'/> : 
  <CaretRight weight='fill'/> }
</div>
{ans[index] && <p className='px-4 py-1 font-Roboto '>{faq.ans.map((i) =>(
<p className='cursor-pointer hover:text-sky-500 py-1'> {i.ans1} </p>  
))}</p> }
</div>
))}
</div>
  )
}

export default MobFooter