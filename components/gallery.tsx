import React from 'react'

export default function Gallery({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <section className='flex flex-col gap-3 w-full'>
      {children}
    </section>
  )
}
