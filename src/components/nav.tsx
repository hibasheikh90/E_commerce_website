import React from 'react'
import Link from 'next/link'

function Nav  () {
  return (

    < div className=' bg-gray-100'>
         <ul className='wrapper flex justify-between items-center gap-x-4 py-4 '>
            <li>
              <Link href="/">Jewelry & Accessories</Link>
            </li>
            <li>
              <Link href="/">Clothing U Shoes</Link>
            </li>
            <li>
              <Link href="/">Home & Living</Link>
            </li>
            <li>
              <Link href="/">Wedding & Party</Link>
            </li>
            <li>
              <Link href="/">Toys & Entertainment</Link>
            </li>
            <li>
              <Link href="/">Art & Collectibles</Link>
            </li>
            <li>
              <Link href="/">Craft SUpplies & Tools</Link>
            </li>
         </ul>
    </div>
  )
}

export default Nav
