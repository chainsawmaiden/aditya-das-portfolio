
import council from '@/public/images/play/fine-art/council.png'
import flowerBoy from '@/public/images/play/fine-art/flower-boy.jpeg'
import mushroomForest from '@/public/images/play/fine-art/mushroom-forest.jpg'
import sculptor from '@/public/images/play/fine-art/sculptor.png'
import stockholmSyndrome from '@/public/images/play/fine-art/stockholm-syndrome.png'
import youngAndBeautiful from '@/public/images/play/fine-art/young-and-beautiful.jpeg'

import creative1 from '@/public/images/play/creative-manifesto/screenshot1.png'

import Img from '@/components/img'
import NavBar from '@/components/navbar'
import PlayText from '@/components/playText'
import React from 'react'
import Image from 'next/image'
import PlayGallery from '@/components/playGallery'

export default function PopcornPage() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col">
      <NavBar />
      <section className='flex flex-col md:grid grid-cols-[1fr_5fr] gap-y-4 gap-x-12'>
        <PlayText year='2021 -' title='Fine Art' description="A collection of paintings and digital illustrations I've made over the years." />
        <PlayGallery>
          <Image src={sculptor} alt='Project photo' className='h-full w-auto border-[1px]'/>
          <Image src={council} alt='Project photo' className='h-full w-auto border-[1px]'/>
          <Image src={stockholmSyndrome} alt='Project photo' className='h-full w-auto border-[1px]'/>
          <Image src={mushroomForest} alt='Project photo' className='h-full w-auto border-[1px]'/>
          <Image src={youngAndBeautiful} alt='Project photo' className='h-full w-auto border-[1px]'/>
          <Image src={flowerBoy} alt='Project photo' className='h-full w-auto border-[1px]'/>
        </PlayGallery>

        <PlayText year='2023' title='Things to Believe In: A Creative Manifesto' description="A web prototype for a communal manifesto for creatives, built from internet comments, posts, and quotes. Different users can upvote/downvote different messages as they choose, and upload their own to be displayed. Content that is more popular grows larger, and unpopular content shrinks in size."/>
        <PlayGallery>
          
          <Image src={creative1} alt='Project photo' className='h-full w-auto'/>
          <div className='w-fit h-full'>
            <iframe width="965" height="800" src="https://www.youtube.com/embed/9fkLCjQfGiQ?si=pD-OStTagSfMSNP9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='object-fit h-full'></iframe>
          </div>
          <div className='w-fit h-full'>
            <iframe width="965" height="800" src="https://www.youtube.com/embed/VFO1NJ8xZoY?si=QAOA5Nt5PX2Q-FgF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='object-fit h-full'></iframe>
          </div>

        </PlayGallery>
        <div>asdf</div>
      </section>
    </main>
  )
}
