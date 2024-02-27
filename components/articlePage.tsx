import React from 'react'
import ButtonSmall from './buttonSmall';
import ImageFull from './imageFull';

import { StaticImageData } from 'next/image';
import Footer from './footer';

export default function ArticlePage({ children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <main className="w-full font-ppneuemontreal text-mdnm">
      <ImageFull src={src} video/>
      <header className='pt-2.5 top-3 left-4 fixed'><ButtonSmall href='.' text='Back' back /></header>
      {children}
      <Footer article />
    </main>
  )
}
