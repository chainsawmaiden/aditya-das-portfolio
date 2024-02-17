import React from 'react'

export default function ColumnLayout({children, cols, breakpoints, text}: Readonly<{ children: React.ReactNode; cols: string, breakpoints?: string, text?: boolean}>) {
  return (
    <section className={`grid ${cols} ${breakpoints} gap-3 w-full ${text && 'max-w-text mx-auto'}`}>
      {children}
    </section>
  )
}