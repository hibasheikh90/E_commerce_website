import React from 'react'
import Image from 'next/image'

function Sell  ()  {
  return (
    <div className='wrapper'>
    <h2 className='font-bold text-4xl text-center md:mt-10'>Best Sellers</h2>
    <div className='hidden md:flex justify-between items-center py-10'>
        <div className='flex gap-10'>
            <p className='text-black text-lg hover:font-bold'>All products</p>
            <p className='text-black text-lg hover:font-bold'>T-Shirts</p>
            <p className='text-black text-lg hover:font-bild'>Hoodies</p>
            <p className='text-black text-lg hover:font-bold'>Jeckets</p>
            <div>
              <button className=" bg-black text-white flex items-center justify-center p-2 px-5 gap-3 w-auto hover:bg-gray-300 hover:text-black rounded-sm duration-100">Show All</button>
            </div>
          </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='py-2 mx-auto'>
              <Image src={'/img 1.webp'} alt='img'width={300} height={400}/>
              <div>
               <h3 className='font-bold my-3'>Basic Dress Green</h3>
               <p className='flex justify-between '>Dress <span className='font-bold'>$236.00</span></p>
              </div>
            </div>
            <div>
              <Image src={'/img 4.webp'} alt='img'width={300} height={400}/>
              < p className='font-bold my-3'>Nike Sportswear Futura Luxe</p>
              <p className='flex justify-between '>bag <span className='font-bold'>$130.00</span></p>
            </div>
            <div>
              <Image src={'/img 7.webp'} alt='img'width={300} height={400}/>
              <p className='font-bold my-3'>Yellow Resevred Hoodie</p>
              <p className='flex justify-between '>Dress <span className='font-bold'>$364.00</span></p>
            </div>
            <div>
              <Image src={'/img 5.webp'} alt='img'width={300} height={400}/>
              <p className='font-bold my-3'>Nike Sportswear Futura Luxe</p>
              <p className='flex justify-between '>Dress <span className='font-bold'>$220.00</span></p>
            </div>
            
            
            
          </div>
</div>
  )
}

export default Sell;