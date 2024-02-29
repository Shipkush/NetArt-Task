import React from 'react'
import {FaPhone , FaFacebook , FaGlobe  } from 'react-icons/fa'

export const Footer = () => {
  return (
 <div className='h-30 w-full bg-yellow-100 '>
   <div className='bg-red-600 text-white h-20 flex justify-around'>
    <div className='flex flex-row justify-center items-center'>
    <FaPhone />
    <h1 className='py-4'>Tollfree 1800 200 1234</h1>
    </div>
   <div className='flex flex-row justify-center items-center'>
   <FaFacebook />
   <h1 className='py-4'>www.facebook.com/cripumps</h1>
</div>
  <div className='flex flex-row justify-center items-center'>
    <FaGlobe />
  <h1 className='py-4' >www.crigroups.com</h1>
  </div>
    
   </div>
 </div>
    
  )
}

export default Footer
