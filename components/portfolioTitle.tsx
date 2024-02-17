import React from 'react'
import TwoColumn from './twoColumn'
import ButtonSmall from './buttonSmall'

export default function PortfolioTitle({slug, title1, title2, children, casestudy}: Readonly<{slug: string, title1: string, title2: string, children: React.ReactNode, casestudy?: boolean,}>) {
  return (
    <TwoColumn>
      <section className='flex flex-col gap-2.5 items-start'>
        <h1 className='font-ppneuemontreal text-xlnm'>{title1} <span className='font-ppmondwest text-xlmw'>{title2}</span></h1>
        {casestudy && <ButtonSmall text='Full Case Study' href={`/${slug}/casestudy`}/>}
      </section>
      <p className='font-ppneuemontreal text-mdnm'>{children}</p>
    </TwoColumn>
  )
}
