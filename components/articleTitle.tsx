import React from 'react'
import StatsColumn from './statsColumn'

export default function ArticleTitle({children, title, team, timeline, tools, disciplines}: Readonly<{children: React.ReactNode, title: string, team: string[], tools: string[], timeline: string[], disciplines: string[]}>) {
  return (
    <section className='w-full bg-black text-white pt-9 font-normal px-6 md:px-24'>
      <div className='w-full max-w-text mx-auto'>
        <div className='flex flex-row justify-between mb-1'>
          <h1 className='font-ppmondwest text-xlmw'>{title}</h1>
          <h1 className='font-ppneuemontreal text-xlnm'>↓</h1>
        </div>

        <hr className='border-solid border-white mb-3' />
        <p className='font-ppneuemontreal text-mdnm mb-6'>{children}</p>

        <section className='grid grid-cols-2 md:flex md:flex-row justify-between gap-3 pb-9'>
          <StatsColumn title="Team" details={team} />
          <StatsColumn title="Timeline" details={timeline} />
          <StatsColumn title="Tools" details={tools} />
          <StatsColumn title="Disciplines" details={disciplines} />
        </section>
      </div>
    </section>
  )
}
