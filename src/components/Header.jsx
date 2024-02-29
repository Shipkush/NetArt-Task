import React from 'react'
import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className=' h-40  w-full bg-yellow-100 flex justify-center '>
      <div className=' mt-5 h-20 max-w-80 items-center sm:max-w-[350px]'>
      <img src={Logo} alt="logo image" />
      </div>
    </div>
  )
}

export default Header
