import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function PlayImage({src, border}: {src: StaticImageData, border?: boolean}) {
  return (
    <Image src={src} alt='Project photo' className={`h-full w-auto min-w-fit ${border && 'border-[1px]'}`}/>
  )
}
