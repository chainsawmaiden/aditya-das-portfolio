import React from 'react'

export default function ArticleText({subheader, horizontal, children}: Readonly<{subheader?: string, horizontal?: boolean, children?: React.ReactNode}>) {
  return (
    <section className={`max-w-text w-full flex flex-col gap-2 ${horizontal && 'md:grid md:grid-cols-4 md:gap-3'}`}>
      <h3 className='font-ppmondwest font-bold text-black text-mdmw'>{subheader}</h3>
      <div className={`font-ppneuemontreal font-normal text-black text-mdnm ${horizontal && 'col-span-3'}`}>{children}</div>
    </section>
  )
}
