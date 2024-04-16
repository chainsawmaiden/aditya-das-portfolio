import React from 'react'

import { Metadata } from 'next'
import PortfolioPage from '@/components/portfolioPage'
import PortfolioTitle from '@/components/portfolioTitle'
import Gallery from '@/components/gallery'
import Img from '@/components/img'
import ColumnImgs from '@/components/columnImgs'
import ImageCaption from '@/components/imageCaption'
import ButtonLarge from '@/components/buttonLarge'

import danceNation1 from '@/public/images/posters/dancenationcover.png'
import danceNation2 from '@/public/images/posters/dancenationkiosk.png'
import danceNation3 from '@/public/images/posters/dancenationletter.png'
import gCafe1 from '@/public/images/posters/gcafe.gif'
import gCafe2 from '@/public/images/posters/gcafe1final.png'
import gCafe3 from '@/public/images/posters/gcafe2final.png'
import hobbes from '@/public/images/posters/hobbesandsushi.png'
import sf1 from '@/public/images/posters/sf1.png'
import sf2 from '@/public/images/posters/sf2.png'

import PlayGallery from '@/components/playGallery'
import PlayImage from '@/components/playImage'
import PlayText from '@/components/playText'

export const metadata: Metadata = {
  title: "Aditya Das | Make Me Whole Again",
};

export default function PostersPage() {
  return (
    <PortfolioPage className=''>
      <PortfolioTitle title1='Miscellaneous designs over the years: ' title2='Posters' slug='popcorn'>
      A small selection of posters I have made over the years. Some of these are just for fun, some of these are for work. 
      </PortfolioTitle>
      <section className='flex flex-col md:grid grid-cols-[1fr_5fr] gap-y-4 gap-x-12 text-smnm mb-6'>

        <PlayText year='2024' title='Yale Spring Fling 2024'>Soon-to-be-official posters for Yale's 2024 Spring Fling concert!</PlayText>
        <PlayGallery>
          {[sf1, sf2].map((img, i) =>
            <PlayImage src={img} key={i} />
          )}
        </PlayGallery>

        <PlayText year='2024' title='Dance Nation'>Poster, kiosk, and playbill set for the play Dance Nation.</PlayText>
        <PlayGallery>
          {[danceNation3, danceNation1, danceNation2,].map((img, i) =>
            <PlayImage src={img} key={i} />
          )}
        </PlayGallery>

        <PlayText year='2024' title='Jam at G-Cafe'>A poster I created as part of a running series of posters for student acts performing at G-Cafe in New Haven.</PlayText>
        <PlayGallery>
          {[gCafe1, gCafe2, gCafe3].map((img, i) =>
            <PlayImage src={img} key={i} />
          )}
        </PlayGallery>

        <PlayText year='2023' title='Hobbes & Sushi'>A shrine to my cats.</PlayText>
        <PlayGallery>
          {[hobbes].map((img, i) =>
            <PlayImage src={img} key={i} />
          )}
        </PlayGallery>
      </section>
      
      <ButtonLarge href='/cimu' text='Next Project'></ButtonLarge>
    </PortfolioPage>
  )
}
