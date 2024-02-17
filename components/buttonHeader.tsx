import React from 'react'
import Link from 'next/link'

export default function ButtonHeader({href, text, centered}: {href: string, text: string, centered?: boolean}) {
  return (
    <Link href={href} className={`font-ppneuemontreal text-smnm py-1.5 px-3 bg-gray-400 text-white rounded-full max-w-full min-w-min w-auto bg-opacity-80 hover:bg-gray-600 transition text-center ${centered && 'mx-auto'}`}>
      {text}<span className='font-ppneuemontreal text-mdmn'></span>
    </Link>
  )
}