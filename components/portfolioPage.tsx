import React from 'react'
import NavBar from './navbar';
import Footer from './footer';

export default function PortfolioPage({ children, className}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <main className={`w-full px-4 font-ppneuemontreal text-mdnm ${className}`}>
      <NavBar />
      <section className='w-full flex flex-col gap-8'>
        {children}
      </section>
      <Footer />
    </main>
  )
}
