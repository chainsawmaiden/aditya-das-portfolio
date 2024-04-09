import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import React from 'react'
import { Metadata } from 'next'
import Experience from '@/components/experience';
import Img from '@/components/img';

import me from '@/public/images/home/me.jpg'
import DividerLight from '@/components/dividerLight';
import AboutLink from '@/components/aboutLink';

export const metadata: Metadata = {
  title: "Aditya Das | About",
};

export default function AboutPage() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col min-h-screen">
      <NavBar />
      <article className='xl:grid grid-cols-2 gap-8'>
        
        <div className='xl:block hidden'><Img src={me} hfill/></div>

        <section className='flex flex-col sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8'>

          <section className='flex flex-col gap-4'>
            <p>Hi, it’s nice to meet you! I’m a designer and engineer living in New Haven, CT, where I study Computing and the Arts at Yale University.</p>

            <p>I come from a background in tech and business. During high school, I conducted student research in engineering labs, which sparked my fascination with human-computer interaction. I strived to build robotic mechanisms that were efficient, intuitive, and safe. While my work nowadays is less mechanical and more digital, I continue to create with these core goals in mind. I believe that design has the power to resonate on a very personal and human level; it can strengthen stories, empower communities, and even define cultures.</p>

            <p>I end up wearing a lot of hats when I work. While my most recent jobs are officially in product design, I often end up playing a product manager role as well. Not to mention, I'm able to build a website here and there (I made this one, at least).</p>

            <p>To me, my interests in design and engineering go hand in hand. It's a process both analytic and emotional: I face a challenge, I research, I ideate, I iterate. I make everything with love and labor, creativity and care. ♡</p>
          </section>

          <section className='flex flex-col gap-4'>
            <p>Outside of my work, I am the founder and president of <AboutLink target='_blank' href='https://stemchests.com/'>STEMChests</AboutLink>, a 501(c)(3) non-profit dedicated to making STEM education accessible for young students in the DC metro area. In a way, this was my first true experience with branding and identity: creating packaging and kit materials that were both affordable and marketable. I also work on cover art and promotional material for a couple <AboutLink target='_blank' href='https://www.instagram.com/p/C42o53fo9Iz/'>musicians</AboutLink>.</p>

            <p>When I'm not working, you'll probably find me continuing my never-ending Zelda: Breath of the Wild run, playing piano, making a DJ mix, rock climbing, painting, napping in a cafe, staring at my phone, or maybe (just maybe) going on a morning hike.</p>

            <AboutLink target='_blank' medium href="/Aditya Das' Resume.pdf" rel="noopener noreferrer">CV ↗</AboutLink>
          </section>

          <div className='col-span-full'><DividerLight black /></div>

          <section className='flex flex-col gap-1 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Experience</h3>

            <Experience title='Yale Law School' year='Product Designer / 2023 -'>
            </Experience>

            <AboutLink href='/cimu/casestudy'>
              <Experience title='Cimu' year='Product Designer / 2023'>
              </Experience>
            </AboutLink>
          </section>

          <section className='flex flex-col gap-1 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Research</h3>

            <Experience title='NYU Stern School of Business' year='Student Intern / 2022 - 2023'>
            </Experience>

            <AboutLink target='_blank' href='https://bam.umd.edu/'>
              <Experience title='Maryland Robotics Center' year='Pathways Intern / 2023'>
              </Experience>
            </AboutLink>
          </section>

          <section className='flex flex-col gap-1 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Leadership</h3>

            <AboutLink target='_blank' href='https://www.stemchests.com'>
              <Experience title='STEMChests' year='Founder & President / 2022 -'>
              </Experience>
            </AboutLink>

            <AboutLink target='_blank' href='https://www.yalespringfling.com'>
              <Experience title='Yale Spring Fling' year='Creative Team / 2023 -'>
              </Experience>
            </AboutLink>

            <AboutLink target='_blank' href='https://www.designatyale.com'>
              <Experience title='Design at Yale' year='Board Member / 2023 -'>
              </Experience>
            </AboutLink>
          </section>

          <section className='flex flex-col text-sm leading-4 gap-1'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Awards & Features</h3>

            <Experience title='Scholastic Art Awards, 2x Silver Key' year='2023'></Experience>
            <Experience title='Scholastic Art Awards, 3x Honorable Mention' year='2023'></Experience>
            <AboutLink target='_blank' href='https://moco360.media/2023/02/03/with-catapults-and-pop-rockets-blair-teens-spread-joy-through-science/'><Experience title='Moco360 Magazine, Featured Article' year='2023'></Experience></AboutLink>
            <Experience title='American Fine Arts Festival International Piano Competition, 1st Place' year='2023'></Experience>
          </section>

          <div className='col-span-2 xl:mb-8'>
            <AboutLink target='_blank'medium href='mailto:aditya.das@yale.edu'>Let's grab a coffee? ↗</AboutLink>
          </div>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
