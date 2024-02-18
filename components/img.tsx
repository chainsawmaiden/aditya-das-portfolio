import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Img({src, square, video, hfill, text, hmax, fit}: {src: StaticImageData, square?: boolean, video?: boolean, hfill?: boolean, text?: boolean, hmax?: boolean, fit?: boolean}) {

  return (
    <Image src={src} alt='Project image' className={`w-full ${fit ? 'object-contain' : 'object-cover'} ${square && 'aspect-square'} ${hmax && 'max-h-screen'} ${hfill ? 'h-full' : 'h-auto'} ${video && 'aspect-video'} ${text && 'max-w-text'}`}/>
  )
}
