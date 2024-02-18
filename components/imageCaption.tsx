import React from 'react'

export default function ImageCaption({ children, text}: Readonly<{ children: React.ReactNode, text?: boolean,}>) {
  return (
    <p className={`font-ppneuemontreal md:text-smnm text-xsnm w-full text-center text-gray-600 mb-3 ${text && 'max-w-text -mt-5'}`}>{children}</p>
  )
}
