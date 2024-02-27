import React from 'react'
import NavBar from './navbar';
import Footer from './footer';

export default function PortfolioPage({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-mdnm">
      <NavBar />
      <section className='w-full flex flex-col gap-8 -mb-8'>
        {children}
      </section>
      <Footer />
    </main>
  )
}
