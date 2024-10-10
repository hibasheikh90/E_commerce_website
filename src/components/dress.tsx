import React from 'react'
import { FaFilter } from "react-icons/fa6";
import Image from 'next/image';

function Dress ()  {
  return (
    <div className='wrapper'>
        <h2 className='font-bold text-4xl text-center md:mt-10'>Or Subscribe To The NewsLetters</h2>
        <div className='flex justify-between items-center py-10'>
            <div className='flex gap-10'>
                <p className='text-black text-lg hover:font-bold'>All products</p>
                <p className='text-black text-lg hover:font-bold'>T-Shirts</p>
                <p className='text-black text-lg hover:font-bild'>Hoodies</p>
                <p className='text-black text-lg hover:font-bold'>Jeckets</p>
                <div>
                  <button className= 'bg-black text-white flex items-center justify-center p-2 px-5 gap-3 w-auto hover:bg-gray-400 hover:text-black rounded-sm duration-200'>
                  <FaFilter />
                    Filter</button>
                </div>
              </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='py-2 mx-auto'>
                  <Image src={'/img 2.webp'} alt='img'width={300} height={400}/>
                  <div>
                   <h3 className='font-bold my-3'>AdColor Classics Joggers</h3>
                   <h3 className='flex justify-between'>Dress <span className='font-bold'>$63.85</span></h3>
                  </div>
                </div>
                <div>
                  <Image src={'/img 4.webp'} alt='img'width={300} height={400}/>
                  < p className='font-bold my-3'>Nike Sportswear Futura Luxe</p>
                  <p className='flex justify-between'>bag <span className='font-bold'>$130.00</span></p>
                </div>
                <div>
                  <Image src={'/img 0.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Geomertic Print Scatf</p>
                  <p className='flex justify-between' >Scarf <span className='font-bold'>$53.00</span></p>
                </div>
                <div>
                  <Image src={'/img 7.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Yellow Resevred Hoodie</p>
                  <p className='flex justify-between' >Dress <span className='font-bold'>$364.00</span></p>
                </div>
                <div>
                  <Image src={'/img 1.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Basic Dress Green</p>
                  <p className='flex justify-between'>Dress <span className='font-bold'>$236.00</span></p>
                </div>
                <div>
                  <Image src={'/img 3.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Nike Air Zoom Pegasus</p>
                  <p className='flex justify-between'>Shoe<span className='font-bold'>$220.00</span></p>
                </div>
                <div>
                  <Image src={'/img 6.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Nike Repel Milker</p>
                  <p className='flex justify-between' >Dress <span className='font-bold'>$120.50</span></p>
                </div>
                <div>
                  <Image src={'/img 5.webp'} alt='img'width={300} height={400}/>
                  <p className='font-bold my-3'>Nike Sportswear Futura Luxe</p>
                  <p className='flex justify-between' >Glasses<span className='font-bold'>$160.00</span></p>
                </div>

              </div>
    </div>
  )
}

export default Dress;