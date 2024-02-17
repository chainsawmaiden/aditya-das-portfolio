import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function ImageFull({src, square, video, hfill}: {src: StaticImageData, square?: boolean, video?: boolean, hfill?: boolean}) {

  return (
    <Image src={src} alt='Project image' className={`w-full max-h-screen object-cover ${square && 'aspect-square'} ${hfill ? 'h-screen' : 'h-auto'} ${video && 'aspect-video'}`}/>
  )
}