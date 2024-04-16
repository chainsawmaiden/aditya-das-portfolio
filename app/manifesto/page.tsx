import React from 'react'

import creative1 from '@/public/images/manifesto/creative-browser.png'
import creative2 from '@/public/images/manifesto/creative-vote-on.jpg'
import creative3 from '@/public/images/manifesto/creative-zoomed-out-2.jpg'

import Gallery from '@/components/gallery'
import PortfolioTitle from '@/components/portfolioTitle'
import Img from '@/components/img'
import PortfolioPage from '@/components/portfolioPage'
import ColumnImgs from '@/components/columnImgs'
import ButtonLarge from '@/components/buttonLarge'
import DividerLight from '@/components/dividerLight'
import ImageCaption from '@/components/imageCaption'
import { Metadata } from 'next'
import TwoColumn from '@/components/twoColumn'

export const metadata: Metadata = {
  title: "Aditya Das | Creative Manifesto",
};

export default function CreativeManifestoPage() {
  return (
    <PortfolioPage >
      <PortfolioTitle title1='A communal website manifesto for creatives: ' title2='Things to believe in: a manifesto' slug='manifesto'>
      A web prototype of a communal manifesto for creatives; an amalgamation of internet comments, posts, discussion threads, memes, and even excerpts from other manifestos. Different users can upvote/downvote different messages as they choose, and upload their own to be displayed. Content that is more popular grows larger, and unpopular content shrinks in size.
      </PortfolioTitle>
      <Gallery>
      
      <Img src={creative3} video/>
      <ImageCaption>The pieces of this manifesto are excerpts pulled from "real" manifestos, comment sections, memes, discussion threads, and Instagram reels.</ImageCaption>
      <div className='w-full aspect-video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9fkLCjQfGiQ?si=pD-OStTagSfMSNP9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='h-full w-full'></iframe>
      </div>
      <ImageCaption>As users vote on what they believe in, the images in the manifesto will respond by growing larger or smaller.</ImageCaption>
      <div className='w-full aspect-video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VFO1NJ8xZoY?si=QAOA5Nt5PX2Q-FgF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='h-full w-full'></iframe>
      </div>
      <ImageCaption>The most popular beliefs will grow to be the largest, while the unpopular or controversial ones will shrink until they're barely visible.</ImageCaption>
      </Gallery>
      
      <ButtonLarge href='/posters' text='Next Project'></ButtonLarge>
    </PortfolioPage>
  )
}
