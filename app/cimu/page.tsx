
import React from 'react'

import threeScreens from '@/public/images/cimu/three-screens.png'
import closeup1 from '@/public/images/cimu/closeup-1.png'
import closeup2 from '@/public/images/cimu/closeup-2.png'
import colorPalette from '@/public/images/cimu/color-palette.png'
import loadingAnimation from '@/public/images/cimu/loading-animation.gif'
import createAccount from '@/public/images/cimu/create-account.gif'
import scheduleMeeting from '@/public/images/cimu/schedule-meeting.gif'
import behindTheScenes from '@/public/images/cimu/behind-the-scenes.png'
import ImageCaption from '@/components/imageCaption'

import Gallery from '@/components/gallery'
import NavBar from '@/components/navbar'
import PortfolioTitle from '@/components/portfolioTitle'
import Img from '@/components/img'
import PortfolioPage from '@/components/portfolioPage'
import ColumnImgs from '@/components/columnImgs'
import ButtonSmall from '@/components/buttonSmall'
import ButtonLarge from '@/components/buttonLarge'
import DividerLight from '@/components/dividerLight'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aditya Das | Cimu",
};

export default function CimuPage() {
  return (
    <PortfolioPage>
      <PortfolioTitle title1='Making a mobile app for' title2='Cimu' slug='cimu' casestudy>
        Cimu aims to help retailers improve sales and reduce waste by connecting shoppers to local tailors, empowering small tailoring businesses along the way. I was responsible for building a design system and creating an effective onboarding process for Cimu’s tailor-facing app, which would allow tailor shops to manage incoming appointments scheduled through Cimu. In collaboration with Kaci Xie and Alana Liu.
      </PortfolioTitle>
      <Gallery>
        <Img src={loadingAnimation} />
        <ImageCaption>Welcome to Cimu.</ImageCaption>
        
        <Img src={threeScreens} />

        <ColumnImgs src1={closeup1} src2={closeup2} colvideo />
        <Img src={createAccount} />

        <ColumnImgs src1={colorPalette} src2={scheduleMeeting} colvideo />

        <Img src={behindTheScenes} />
        <ImageCaption>Behind the scenes.</ImageCaption>

        <ButtonSmall href='/cimu/casestudy' text='Read my full case study here' centered></ButtonSmall>
      </Gallery>

      <ButtonLarge href='/popcorn' text='Next Project' caseStudy></ButtonLarge>
    </PortfolioPage>
  )
}
