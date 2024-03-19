import Link from 'next/link'
import React from 'react'

export default function Footer({article}: {article?: boolean}) {
  return (
    <>
    <div className='grow'></div>
    <footer className={`${article && 'px-3'} mt-[4.5rem] pb-1 w-full sticky top-0 left-0 opacity-50 text-black flex font-ppneuebit font-bold text-sm uppercase justify-between justify-self-end`}>
      
      <Link href='/' className="hover:opacity-80 transition">Aditya Das © 2024<span className="sm:inline hidden"> / Made with love (and code)</span></Link>
      <Link href='mailto:aditya.das@yale.edu' target='_blank' className="hover:opacity-80 transition"><span className="sm:inline hidden">The internet is lonely... </span>talk to me!</Link>
    </footer>
    </>
  )
}
