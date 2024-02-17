import { StaticImageData } from 'next/image'
import React from 'react'
import TwoColumn from './twoColumn'
import Img from './img'

export default function ColumnImgs({src1, src2, colvideo, square, video}: {src1: StaticImageData, src2: StaticImageData, colvideo?: boolean, square?: boolean, video?: boolean}) {
  return (
    <TwoColumn video={colvideo}>
      <Img src={src1} square={square} video={video} hfill={colvideo} />
      <Img src={src2} square={square} video={video} hfill={colvideo} />
    </TwoColumn>
  )
}
