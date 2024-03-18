import Image from 'next/image'
import React from 'react'

import { homeProjects, homeProjectsType } from '@/data/projects' 
import Link from 'next/link'
import Img from './img'
import TwoColumn from './twoColumn'

export default function HomeProjects() {
  return (
    <section className='flex flex-col gap-3 text-ppneuemontreal md:text-smnm text-xsnm'>
      <TwoColumn>
      {homeProjects.map((homeProject: homeProjectsType, i: number) => (
        <Link href={homeProject.slug} className={`group flex flex-col w-full /lg:w-3/4 mx-auto ${i<= 0 && 'md:col-span-2'}`} key={homeProject.name}>
          <Img src={homeProject.cover} video priority/>
          
          <div className='flex justify-between py-1.5 group-hover:opacity-80 transition'>
            <p className='text-left'>{homeProject.name}</p>
            <p className='text-right'>{homeProject.details}</p>
          </div>
      </Link>
      ))}
      </TwoColumn>
    </section>
  )
}
