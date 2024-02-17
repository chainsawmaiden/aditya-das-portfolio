import React from 'react'
import NavBar from './navbar';

export default function PortfolioPage({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main className="w-full px-3 pb-24 font-ppneuemontreal text-mdnm">
      <NavBar />
      <section className='w-full flex flex-col gap-16'>
        {children}
      </section>
    </main>
  )
}
