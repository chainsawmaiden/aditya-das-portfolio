import cimuCover from '@/public/images/home/cimu2.png'
import popcornCover from '@/public/images/home/popcorn.png'
import makeMeWholeCover from '@/public/images/home/makemewhole.png'

import { StaticImageData } from 'next/image'

export type homeProjectsType = {
  name: string,
  slug: string,
  cover: StaticImageData,
  details: string,
} 

export const homeProjects = [
  {
    name: 'Cimu',
    slug: 'cimu',
    cover: cimuCover,
    details: 'Product Design / Contracted / 2023'
  },
  {
    name: 'Popcorn* Magazine',
    slug: 'popcorn',
    cover: popcornCover,
    details: 'Publication Design, Branding / Academic / 2023'
  },
  {
    name: 'Make Me Whole Again',
    slug: 'makemewhole',
    cover: makeMeWholeCover,
    details: 'Kinetic Typeface, Motion Graphics / Academic / 2023'
  },
] as homeProjectsType[];