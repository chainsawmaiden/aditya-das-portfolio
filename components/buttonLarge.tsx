import React from 'react'
import Link from 'next/link'
import DividerLight from './dividerLight'

export default function ButtonLarge({href, text, caseStudy}: {href: string, text: string, caseStudy?: boolean}) {
  return (
    <>
      <DividerLight next={!caseStudy} />
      <Link href={href} className='font-ppmondwest text-xlmw text-black rounded-full max-w-full w-full min-w-min hover:opacity-70 transition text-center'>
        {text}<span className='font-ppneuemontreal text-xlmn'> ↗</span>
      </Link>
    </>
  )
}