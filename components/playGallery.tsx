import React from 'react'

export default function PlayGallery({children, wfull}: Readonly<{children?: React.ReactNode, wfull?: boolean}>) {
  return (
    <div className={`${wfull ? "" : "h-80 md:h-[32rem] max-h-[80vh]"} flex w-full overflow-x-auto gap-3`}>
      {children}      
    </div>
  )
}
