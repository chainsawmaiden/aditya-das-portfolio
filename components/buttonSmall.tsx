import React from 'react'
import Link from 'next/link'

export default function ButtonSmall({href, text, centered, back}: {href: string, text: string, centered?: boolean, back?: boolean}) {
  return (
    <Link href={href} className={`opacity-[.975] font-ppmondwest text-mdmw py-3 ${back ? 'px-6' : 'px-9'} bg-gray-400 text-white rounded-full max-w-full min-w-min w-auto hover:bg-gray-600 transition text-center ${centered && 'mx-auto'}`}>
      {back && <span className='font-ppneuemontreal text-mdmn'>← </span>} {text} {!back && <span className='font-ppneuemontreal text-mdmn'> ↗</span>}
    </Link>
  )
}
