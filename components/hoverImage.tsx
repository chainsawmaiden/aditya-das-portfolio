import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function HoverImage({children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <span className='font-ppmondwest md:text-xlmw text-mdmw group cursor-help'>
      {children}
      <Image className='group-hover:opacity-100 absolute md:max-w-96 max-h-[75vh] h-auto w-auto md:top-[42vh] top-[35vh] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none' src={src} alt='image'/>
    </span>
  )
}
