import React from 'react'

export default function TwoColumn({children, video}: Readonly<{ children: React.ReactNode; video?: boolean}>) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 gap-3 w-full ${video && 'aspect-video'}`}>
      {children}
    </section>
  )
}
