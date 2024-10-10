import React from 'react'
import Image from 'next/image'

function Zara  ()  {
  return (
    <div className="py-10">
      <div>
        <div>
          <Image src={'/bg.png'} alt='zara' height={200} width={250}/>
        </div>
      </div>
    </div>
  )
}

export default Zara;
