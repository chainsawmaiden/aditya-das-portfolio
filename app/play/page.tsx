
import council from '@/public/images/play/fine-art/council.png'
import flowerBoy from '@/public/images/play/fine-art/flower-boy.jpeg'
import mushroomForest from '@/public/images/play/fine-art/mushroom-forest.jpg'
import sculptor from '@/public/images/play/fine-art/sculptor.png'
import stockholmSyndrome from '@/public/images/play/fine-art/stockholm-syndrome.png'
import youngAndBeautiful from '@/public/images/play/fine-art/young-and-beautiful.jpeg'

import creative1 from '@/public/images/play/creative-manifesto/screenshot1.png'

import danceNation from '@/public/images/play/posters/dancenation.png'
import gCafe from '@/public/images/play/posters/gcafe.gif'
import hobbes from '@/public/images/play/posters/hobbesandsushi.png'

import Img from '@/components/img'
import NavBar from '@/components/navbar'
import PlayText from '@/components/playText'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import PlayGallery from '@/components/playGallery'
import PlayImage from '@/components/playImage'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aditya Das | Play",
};

export default function PopcornPage() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col min-h-screen">
      <NavBar />
      <section className='flex flex-col md:grid grid-cols-[1fr_5fr] gap-y-4 gap-x-12'>

        <PlayText year='2021 -' title='Fine Art'>A collection of paintings and digital illustrations I've made over the years.</PlayText>
        <PlayGallery>
          {[sculptor, council, stockholmSyndrome, mushroomForest, youngAndBeautiful, flowerBoy].map((img, i) =>
            <PlayImage src={img} border key={i} />
          )}
        </PlayGallery>

        <PlayText year='2023 -' title='Posters...'>Some miscellaneous posters made for smaller projects. Or maybe just something I made for fun!</PlayText>
        <PlayGallery>
          {[danceNation, hobbes, gCafe].map((img, i) =>
            <PlayImage src={img} key={i} />
          )}
        </PlayGallery>

        <PlayText year='2023' title='Things to Believe In: A Creative Manifesto' >A web prototype for a communal manifesto for creatives, built from internet comments, posts, and quotes. Different users can upvote/downvote different messages as they choose, and upload their own to be displayed. Content that is more popular grows larger, and unpopular content shrinks in size.</PlayText>

        <PlayGallery>
          <PlayImage src={creative1} />

          <div className='h-full aspect-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9fkLCjQfGiQ?si=pD-OStTagSfMSNP9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className=' h-full w-full'></iframe>
          </div>

          <div className='h-full aspect-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VFO1NJ8xZoY?si=QAOA5Nt5PX2Q-FgF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='h-full w-full'></iframe>
          </div>
        </PlayGallery>

        <PlayText year='2022' title='All of Me, All of You' >An art installation made in my senior year of high school. Special thanks to Shineh Kim.</PlayText>
        <PlayGallery>
          <div className='h-full aspect-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7Z2KVbWiKxU?si=ALn6quONm3kn7pX0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className=' h-full w-full'></iframe>
          </div>
        </PlayGallery>

        <PlayText year='2022' title='Bluetooth Robotic Arm' >A robotic arm controlled wirelessly by a glove. See a more detailed (but super outdated) write-up <Link href="https://chainsawmaiden.github.io/PHYS_S-12/final-project.html" className='underline hover:opacity-80'>here</Link>. Special thanks to Nathan Melenbrink and Victoria Shen.</PlayText>
        <PlayGallery>
          <div className='h-full aspect-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GPSEP8xgVMI?si=sXOPz1MSsAumbwEJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className=' h-full w-full'></iframe>
          </div>
        </PlayGallery>
      </section>
      <Footer />
    </main>
  )
}
