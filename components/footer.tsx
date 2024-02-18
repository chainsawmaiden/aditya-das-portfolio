import Link from 'next/link'
import React from 'react'
import DividerLight from './dividerLight'

export default function Footer({article}: {article?: boolean}) {
  return (
    <footer className={`${article && 'px-3'} mt-[4.5rem] pb-1 w-full sticky top-0 left-0 opacity-50 text-black flex font-ppneuebit font-bold text-sm uppercase justify-between`}>
      
      <Link href='/' className="hover:opacity-80 transition">Aditya Das © 2024 / Made with love (and code)</Link>
      <Link href='mailto:aditya.das@yale.edu' target='_blank' className="hover:opacity-80 transition">The internet is lonely... talk to me!</Link>
  </footer>
  )
}
