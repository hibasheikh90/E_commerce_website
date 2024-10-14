import React from 'react'
import Image from 'next/image'

function Flow  ()  {
  return (
    <div className='bg-gray-100 w-full'>
        <div className='wrapper'>
            <h2 className='flex justify-center font-bold text-4xl pt-10 md:mt-10'>Follow Products And discount On Instagram</h2>
            <div className='py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6'>
                    <Image src='/card 1.webp' alt='img'width={200} height={200}/>
                    <Image src='/card 2.webp' alt='img'width={200} height={200}/>
                    <Image src='/card 3.webp' alt='img'width={200} height={200}/>
                    <Image src='/card 4.webp' alt='img'width={200} height={200}/>
                    <Image src='/card 5.webp' alt='img'width={200} height={200}/>
                    <Image src='/card 6.webp' alt='img'width={200} height={200}/>
                </div>
            </div>
            <h3 className="font-bold text-4xl text-center  md:mt-10">Or Subcribe To The NewsLetters</h3>
        </div>
        <div className='md:flex items-center justify-center py-16 md:space-x-5'>
            <input className="py-2 w-full md:w-[40%] border-b-2 border-black focus:outline-none  bg-transparent" type='text'name='emai' placeholder='Email Address'/>
            <button className="pb-2 w-full md:w-[8%] border-b-2 border-black hover:bg-black hover:text-white hover:duration-400">SUBMIT</button>
        </div>
    </div>
  )
}

export default Flow
