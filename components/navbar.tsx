import Link from 'next/link'
import React from 'react'

export default function NavBar({home, article}: {home?: boolean, article?: boolean}) {
  return (
  <header className={`w-full  top-0 z-50 ${article ? 'px-4 fixed' : 'sticky'} ${home ? 'pb-0' : 'pb-6'} left-0 text-black opacity-50 py-1 font-ppneuebit font-bold text-sm uppercase flex justify-between`}>
    <Link href='/' className="hover:opacity-80 transition">Work</Link>
    <Link href='/play' className="hover:opacity-80 transition">Play</Link>
    <Link href='/about' className="hover:opacity-80 transition">About</Link>
    <span><Link href='mailto:aditya.das@yale.edu' target='_blank' className="hover:opacity-80 transition">Email</Link> / <Link href='https://www.linkedin.com/in/aditya-das-me/' target='_blank' className="hover:opacity-80 transition">Linkedin</Link></span>
  </header>
  )
}
