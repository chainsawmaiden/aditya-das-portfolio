import React from 'react'

export default function ArticleBody({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <section className='w-full my-9 flex flex-col gap-9 max-w-6xl mx-auto'>
      {children}
    </section>
  )
}
