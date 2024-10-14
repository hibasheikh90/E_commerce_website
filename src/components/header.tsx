import React from 'react'
import Image from 'next/image'
import { FaShoppingBag } from "react-icons/fa";
import { BiSearch, BiSolidUser } from 'react-icons/bi'

function Header () {
  return (
    <div className='bg-gray-100'>

    <div className='wrapper flex justify-between items-center '>
      <div className='hidden md:flex justify-between gap-x-4 py-4 wrapper'>
        <BiSearch/>
      </div>
        <div className='flex justify-center py-4 '>
            <Image src="/logo.webp"alt='logo'height={150} width={150}/>
        </div>
        <div className='flex gap-4'>
          <div className='flex items-center  justify-center gap-2'>
          <BiSolidUser/>
          <p>Account</p>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <FaShoppingBag/>
            <p>Shopping</p>
          </div>
        </div>
    </div>
    </div>
  
  )
}

export default Header
