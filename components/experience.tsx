import React from 'react'

export default function Experience({title, year, children}: Readonly<{title?: string, year?: string, children?: React.ReactNode}>) {
  return (
    <div className={`flex flex-col gap-0.5`}>
      <div className='flex justify-between gap-2'>
        <p>{title}</p>
        <p className='text-end'>{year}</p>
      </div>
      {children && <p className='italic *text-xsnm'>{children}</p>}
    </div>
  )
}
