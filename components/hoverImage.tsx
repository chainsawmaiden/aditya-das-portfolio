import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function HoverImage({children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <span className='font-ppmondwest md:text-xlmw text-mdmw group *underline cursor-help'>
      {children}<sup className='text-xs align-super font-ppneuebit hidden md:inline'>[?]</sup>
      <Image className='group-hover:opacity-100 fixed w-[50vw] h-[50vh] object-contain top-[25%] md:top-[44%] left-1/2 md:left-3/4 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all' src={src} alt='image'/>
    </span>
  )
}
