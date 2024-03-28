import Link from 'next/link'
import React from 'react'

export default function AboutLink({href, target, children, medium, noUnderline, rel}: Readonly<{href: string, target?: string, children?: React.ReactNode, medium?: boolean, noUnderline?: boolean, rel?: string}>) {
  return (
    <Link target={target} className={`hover:opacity-80 transition-all ${medium && 'font-medium'} ${!noUnderline && 'underline'}`} href={href} rel={rel}>{children}</Link>
  )
}
