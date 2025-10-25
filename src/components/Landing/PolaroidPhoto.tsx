import React from 'react'
import Image from 'next/image'

export const PolaroidPhoto = () => {
  return (
    <div className="relative">
      <div className="relative w-86 bg-white shadow-sm shadow-primary-dark-foreground pt-2 gap-2"> 
        <Image
          alt="Photo Tape"
          src="/pressets/kraftTape.png"
          width="22"
          height="65"
          className="object-cover rounded-sm absolute -right-1 -top-5 -rotate-40 z-2"
        />
        <div className="w-80 h-120 rounded-sm mx-auto relative overflow-hidden"> {/* Profile pic*/}
          <span className="font-photoText text-white absolute bottom-6 right-4 text-2xl -rotate-12 z-10 text-wrap">Lilia E. Martínez</span>
          <Image
            alt="Lilia E. Martínez Rosas"
            src="/pressets/me.jpg"
            fill
            className="object-cover rounded-sm -hue-rotate-15"
          />
        </div>
        <div className='px-4'>
          <span className="font-photoText text-black font-bold">Ready For Your Next Project</span>
          <span className="text-sm font-light text-gray-700 block pb-2"> Bringing Order to Chaos, One Task at a Time</span>
        </div>
      </div>
    </div>
  )
}
