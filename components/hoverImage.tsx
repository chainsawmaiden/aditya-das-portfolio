import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function HoverImage({children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <span className='font-ppmondwest md:text-xlmw text-mdmw group cursor-help'>
      {children}
      <Image className='group-hover:opacity-[.975] absolute md:w-96 w-36 md:top-[42vh] top-[35vh] left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto opacity-0 pointer-events-none' src={src} alt='image'/>
    </span>
  )
}
