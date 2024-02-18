import { StaticImageData } from 'next/image';
import React from 'react'
import Img from './img';

export default function ArticleImageCaption({children, src, square, video, fit}: Readonly<{ children: React.ReactNode; src: StaticImageData, square?: boolean, video?: boolean, fit?: boolean,}>) {
  return (
    <section className={`w-full flex flex-col gap-2`}>
      <Img hmax src={src} square={square} video={video} fit={fit}/>
      <div className='font-ppneuemontreal flex flex-col gap-2 text-gray-600 text-smnm'>
        {children}
      </div>
    </section>
  )
}
