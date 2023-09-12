import React from 'react'
import vid from '../assets/Advanced-Fraud-Protection.mp4'

const Protect = () => {
  return (
    <div className='container m-auto flex items-center justify-between md:gap-10 text-primary-blue px-4 md:px-0 pb-11'>

        <div className='w-3/4 hidden md:block'>
<video src={vid}></video>
        </div>

<div>

<div className='pb-6'>
    <h2 className='font-bold text-3xl md:text-5xl md:w-4/5 pb-4 font-Boing'>Protect yourself and your customers with advanced fraud detection
</h2>
<p className='md:w-3/4 font-Roboto'>Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.

</p>
</div>
<div>
    <h2 className='font-bold  text-3xl md:text-5xl md:w-4/5 pb-4 font-Boing'>
    Detailed reporting for accounting, reconciliation, and audits
</h2>
<p className='md:w-3/4 font-Roboto'>
Understand your customers’ purchase patterns and do easy reconciliations with a robust data Dashboard and easy exports.
</p>
</div>



</div>

    </div>
  )
}

export default Protect