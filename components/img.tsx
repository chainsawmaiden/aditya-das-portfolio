import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Img({src, square, video, hfill}: {src: StaticImageData, square?: boolean, video?: boolean, hfill?: boolean}) {

  return (
    <Image src={src} alt='Project image' className={`w-full object-cover ${square && 'aspect-square'} ${hfill ? 'h-full' : 'h-auto'} ${video && 'aspect-video'}`}/>
  )
}
