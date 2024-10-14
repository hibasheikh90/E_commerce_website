import React from 'react'
import Image from 'next/image'

function Barands  ()  {
  return (
    <div className='wrapper my-10'>

    <div className='hidden md:flex justify-between p-5'>
      <Image src="/brand-1.webp" alt='logo' width={130} height={100}/>
      <Image src="/brand-2.webp" alt='logo' width={130} height={100}/>
      <Image src="/brand-3.webp" alt='logo' width={130} height={100}/>
      <Image src="/brand-4.webp" alt='logo' width={130} height={100}/>
      <Image src="/brand-5.webp" alt='logo' width={130} height={100}/>
    </div>
    </div>
  )
}

export default Barands
