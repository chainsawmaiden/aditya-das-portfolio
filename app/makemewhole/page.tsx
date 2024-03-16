import React from 'react'

import mockup1 from '@/public/images/make-me-whole-again/mockup1.png'
import mockup2 from '@/public/images/make-me-whole-again/mockup2.png'
import mockup3 from '@/public/images/make-me-whole-again/mockup3.png'
import mockup4 from '@/public/images/make-me-whole-again/mockup4.png'
import mockup5 from '@/public/images/make-me-whole-again/mockup5.png'

import behind1 from '@/public/images/make-me-whole-again/behind1.png'
import behind2 from '@/public/images/make-me-whole-again/behind2.png'

import Gallery from '@/components/gallery'
import PortfolioTitle from '@/components/portfolioTitle'
import Img from '@/components/img'
import PortfolioPage from '@/components/portfolioPage'
import ColumnImgs from '@/components/columnImgs'
import ButtonLarge from '@/components/buttonLarge'
import DividerLight from '@/components/dividerLight'
import ImageCaption from '@/components/imageCaption'


export default function PopcornPage() {
  return (
    <PortfolioPage>
      <PortfolioTitle title1='A crowdsourced kinetic typeface project: ' title2='Make Me Whole Again' slug='popcorn'>
      I gave 20 people some 7x10 grids and an open challenge: create a pixelated alphabet by shading in the squares. I then compiled and combined their typefaces, placing one person's "interpretation" on the top and another person's on the bottom. The results varied: some combinations were beautiful and shockingly compatible, while others mashed together to create unreadable, semi-abstract forms. The typeface serves both as a tribute to individuality and uniqueness, while also showing the beauty of combining the minds of two strangers. Below is a typographic poster created from this experiment.
      </PortfolioTitle>
      <Gallery>
      <div className='w-full h-screen'>
      <iframe src="https://player.vimeo.com/video/912329594?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?autoplay=1&loop=1&autopause=0" allow="autoplay; fullscreen;" className="w-full h-full py-4 bg-black" title="Make Me Whole Again"></iframe>
      </div>
        <Img src={mockup1} video />
        <ColumnImgs src1={mockup2} src2={mockup4} colvideo/>
        <ColumnImgs src1={mockup3} src2={mockup5} colvideo/>
        <ImageCaption>Some of my favorite combinations.</ImageCaption>
        <ColumnImgs src1={behind1} src2={behind2} colvideo/>
        <ImageCaption>Behind the scenes.</ImageCaption>
      </Gallery>
      <DividerLight />
      
      <ButtonLarge href='/cimu' text='Next Project'></ButtonLarge>
    </PortfolioPage>
  )
}
