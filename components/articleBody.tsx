import React from 'react'

export default function ArticleBody({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <section className='w-full px-6 md:px-24 my-9 flex flex-col gap-9 mx-auto'>
      {children}
    </section>
  )
}
