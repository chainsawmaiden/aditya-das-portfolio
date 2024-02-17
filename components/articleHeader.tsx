import React from 'react'

export default function ArticleHeader({subhead, description, children}: Readonly<{subhead?: string, description?: string, children: React.ReactNode}>) {
  return (
    <div className='flex flex-col gap-1.5 max-w-text mx-auto'>
      <p className='font-ppneuebit text-mdnb uppercase font-bold text-gray-600 mb-1'>{subhead}</p>
      <h1 className='font-ppmondwest text-xlmw'>{children}</h1>
      <p>{description}</p>
    </div>
  )
}
