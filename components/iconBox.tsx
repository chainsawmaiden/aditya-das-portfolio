import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function IconBox({src, caption}: {src: StaticImageData, caption?: string,}) {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='w-full aspect-square h-auto flex justify-center items-center bg-gray-50 rounded-md'>
        <Image src={src} alt='Icon' className='w-1/2 h-auto'/>
      </div>
      <p className='font-ppneuemontreal text-smnm w-full text-center text-gray-600'>{caption}</p>
    </div>
  )
}
