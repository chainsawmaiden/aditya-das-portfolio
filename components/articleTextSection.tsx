import React from 'react'

export default function ArticleTextSection({children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className='max-w-text w-full flex flex-col gap-3'>
      {children}
    </div>
  )
}
