import React from 'react'
import ButtonSmall from './buttonSmall';
import ImageFull from './imageFull';

import { StaticImageData } from 'next/image';

export default function ArticlePage({ children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <main className="w-full pb-24 font-ppneuemontreal text-mdnm">
      <ImageFull src={src} video/>
      <header className='pt-2.5 top-3 left-3 fixed'><ButtonSmall href='.' text='Back' back /></header>
      {children}
    </main>
  )
}
