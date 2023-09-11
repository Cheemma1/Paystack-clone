import React from 'react'
import vid from '../assets/Advanced-Fraud-Protection.mp4'

const Protect = () => {
  return (
    <div className='container m-auto flex items-center justify-between md:gap-10 text-primary-blue px-4 md:px-0'>

        <div className='w-1/2 hidden md:block'>
<video src={vid}></video>
        </div>

<div>

<div className='pb-6'>
    <h2 className='font-bold text-3xl md:text-4xl md:w-3/4 pb-4'>Protect yourself and your customers with advanced fraud detection
</h2>
<p className='md:w-3/4'>Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.

</p>
</div>
<div>
    <h2 className='font-bold  text-3xl md:text-4xl md:w-3/4 pb-4'>
    Detailed reporting for accounting, reconciliation, and audits
</h2>
<p className='md:w-3/4'>
Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.
</p>
</div>



</div>

    </div>
  )
}

export default Protect