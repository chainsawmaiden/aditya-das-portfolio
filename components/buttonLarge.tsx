import React from 'react'
import Link from 'next/link'

export default function ButtonLarge({href, text}: {href: string, text: string}) {
  return (
    <Link href={href} className='font-ppmondwest text-xlmw text-black rounded-full max-w-full w-full min-w-min hover:opacity-70 transition text-center'>
      {text}<span className='font-ppneuemontreal text-xlmn'> ↗</span>
    </Link>
  )
}