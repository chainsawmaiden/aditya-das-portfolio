import React from 'react'

export default function ColumnLayout({children, cols, breakpoints, text, video}: Readonly<{ children: React.ReactNode; cols: string, breakpoints?: string, text?: boolean, video?: boolean,}>) {
  return (
    <section className={`grid ${cols} ${breakpoints} gap-6 w-full ${video && 'md:aspect-video'} ${text && 'max-w-text'}`}>
      {children}
    </section>
  )
}