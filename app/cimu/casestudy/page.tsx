import loadingAnimation from '@/public/images/cimu/casestudy/loading-animation.gif'


import iconAlarm from '@/public/images/cimu/casestudy/icon-alarm.svg'
import iconCart from '@/public/images/cimu/casestudy/icon-cart.svg'
import iconPhone from '@/public/images/cimu/casestudy/icon-phone.svg'
import iconRefresh from '@/public/images/cimu/casestudy/icon-refresh.svg'
import iconSecurity from '@/public/images/cimu/casestudy/icon-security.svg'


import React from 'react'
import Link from 'next/link'

import ArticlePage from '@/components/articlePage'
import ArticleTitle from '@/components/articleTitle'
import ArticleBody from '@/components/articleBody'
import ArticleHeader from '@/components/articleHeader'
import ColumnLayout from '@/components/columnLayout'
import IconBox from '@/components/iconBox'

export default function CimuCaseStudy() {
  return (
    <ArticlePage src={loadingAnimation}>
      <ArticleTitle 
        title='Cimu'
        team={['Aditya Das', 'Alana Liu', 'Kaci Xie']}
        timeline={['Nov 2023 - Dec 2023', '(4 weeks)']}
        tools={['Figma']}
        disciplines={['Product Design', 'User Experience', 'Design System']}>
      Returns cost clothing companies millions of dollars and oftentimes results in waste. Cimu aims to help these retailers improve sales and reduce waste by connecting shoppers to local tailors, empowering small tailoring businesses along the way. I was responsible for building a design system and creating an effective onboarding process for Cimu’s tailor-facing app, which would allow tailor shops to manage incoming appointments scheduled through Cimu. 
      </ArticleTitle>
      <ArticleBody>
        <ArticleHeader subhead='The Problem'
        description="Let's take a quick look at Cimu's pilot method for connecting customers to tailors:">Scheduling appointments with tailors is time-consuming and inefficient.</ArticleHeader>
        <ColumnLayout
          cols='grid-cols-3 md:grid-cols-5' text>
            <IconBox src={iconCart} caption='Cimu receives tailoring request from client' />
            <IconBox src={iconAlarm} caption='Cimu gets available appointment times from customer' />
            <IconBox src={iconPhone} caption='Cimu manually calls tailors and ask for availabilities' />
            <IconBox src={iconSecurity} caption='Cimu sets and confirms appointment with customer via email' />
            <IconBox src={iconRefresh} caption='Rinse and repeat for every order' />
        </ColumnLayout>
      </ArticleBody>
    </ArticlePage>
  )
}
