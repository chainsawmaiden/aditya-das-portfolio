import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function HoverImage({children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <span className='font-ppmondwest md:text-xlmw text-mdmw group cursor-help'>
      {children}<sup className='text-xs align-super font-ppneuebit hidden md:inline'>[?]</sup>
      <Image className='group-hover:opacity-100 absolute w-[75vh] h-[75vh] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none' src={src} alt='image'/>
    </span>
  )
}
