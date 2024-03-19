import React from 'react'
import ButtonSmall from './buttonSmall';
import ImageFull from './imageFull';

import { StaticImageData } from 'next/image';
import Footer from './footer';
import NavBar from './navbar';

export default function ArticlePage({ children, src}: Readonly<{ children: React.ReactNode; src: StaticImageData}>) {
  return (
    <main className="w-full font-ppneuemontreal text-mdnm">
      <NavBar article />
      <ImageFull src={src} video/>
      <header className='pt-1.5 top-[1.875rem] left-3 fixed opacity-50'><ButtonSmall href='.' text='Back' back /></header>
      {children}
      <div className='w-full flex justify-center'><ButtonSmall href='.' text='Take me back' back /></div>
      <Footer article />
    </main>
  )
}
