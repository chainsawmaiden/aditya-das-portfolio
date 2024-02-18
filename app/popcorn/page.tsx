
import React from 'react'

import closingGif from '@/public/images/popcorn/closing-gif.gif'
import collapsed from '@/public/images/popcorn/collapsed.png'
import fullSpread from '@/public/images/popcorn/full-spread.png'
import halfSpread from '@/public/images/popcorn/half-spread.png'
import letterboxd1 from '@/public/images/popcorn/letterboxd1.png'
import letterboxd2 from '@/public/images/popcorn/letterboxd2.png'
import logo1 from '@/public/images/popcorn/logo1.png'
import logo2 from '@/public/images/popcorn/logo2.png'
import logo3 from '@/public/images/popcorn/logo3.png'
import official from '@/public/images/popcorn/official.png'
import opening from '@/public/images/popcorn/opening.png'
import openingGif from '@/public/images/popcorn/opening-gif.gif'
import popcorn1 from '@/public/images/popcorn/popcorn1.png'
import popcorn2 from '@/public/images/popcorn/popcorn2.png'
import popcorn3 from '@/public/images/popcorn/popcorn3.png'
import popcorn4 from '@/public/images/popcorn/popcorn4.png'
import sticker from '@/public/images/popcorn/sticker.png'

import Gallery from '@/components/gallery'
import NavBar from '@/components/navbar'
import PortfolioTitle from '@/components/portfolioTitle'
import Img from '@/components/img'
import PortfolioPage from '@/components/portfolioPage'
import ColumnImgs from '@/components/columnImgs'
import ButtonSmall from '@/components/buttonSmall'
import ButtonLarge from '@/components/buttonLarge'
import DividerLight from '@/components/dividerLight'
import { off } from 'process'
import ImageCaption from '@/components/imageCaption'


export default function PopcornPage() {
  return (
    <PortfolioPage>
      <PortfolioTitle title1='Rethinking movie theater branding with' title2='Popcorn* Magazine' slug='popcorn'>
      An imagined magazine for New Haven’s very own Criterion Cinemas, inspired by an evergreen symbol of cinema: the popcorn box. I have always been surprised by the disconnect of movie theater branding with the younger audiences who now drive most of their revenue. This magazine attempts to bridge that disconnect with a fun and lighthearted design.
      </PortfolioTitle>
      <Gallery>
        <Img src={official} video />
        <Img src={collapsed} video />
        <ImageCaption>The magazine can then be collapsed to take off the sticker. The orientation is made clear by the cover screencap, which flattens to create one full shot. </ImageCaption>

        <ColumnImgs src1={sticker} src2={opening} colvideo />
        <ColumnImgs src1={openingGif} src2={closingGif} />
        <ImageCaption>Once the "popcorn box" is collapsed, the magazine can be easily opened and closed to reveal the inside spreads.</ImageCaption>
        <Img src={halfSpread} />
        <Img src={fullSpread} />
        <ImageCaption>Many of us students hear about movies on the internet or word of mouth. So why not go all out, and add Letterboxd reviews for each film?</ImageCaption>
        <Img src={letterboxd1} video />
        <Img src={letterboxd2} video />
        <Img src={logo1} video />
        <ColumnImgs src1={logo2} src2={logo3} video />
        <ImageCaption>While I was at it, I came up with a new logo for Criterion Cinemas.</ImageCaption>
        
        <ColumnImgs src1={popcorn1} src2={popcorn2} video />
        <ColumnImgs src1={popcorn3} src2={popcorn4} video />
        <ImageCaption>Thanks for watching!</ImageCaption>

      </Gallery>
      <DividerLight />
      
      <ButtonLarge href='/cimu' text='Next Project'></ButtonLarge>
    </PortfolioPage>
  )
}
