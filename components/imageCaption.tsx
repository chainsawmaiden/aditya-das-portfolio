import React from 'react'

export default function ImageCaption({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <p className='font-ppneuemontreal md:text-smnm text-xsnm w-full text-center text-gray-600 mb-3 '>{children}</p>
  )
}
