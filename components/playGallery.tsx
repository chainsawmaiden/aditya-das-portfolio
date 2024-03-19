import React from 'react'

export default function PlayGallery({children}: Readonly<{children?: React.ReactNode}>) {
  return (
    <div className='h-[40vh] md:h-[75vh] flex w-full overflow-x-auto gap-3'>
      {children}      
    </div>
  )
}
