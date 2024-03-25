import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import React from 'react'
import { Metadata } from 'next'
import TwoColumn from '@/components/twoColumn';
import Experience from '@/components/experience';
import Link from 'next/link';
import Img from '@/components/img';

import me from '@/public/images/home/me.jpg'

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

            <p>While conducting student research in engineering labs throughout my high school years, I became fascinated with human centered robotics and strived to build mechanisms that were safe, efficient, and intuitive. While my work now is less mechanical and more digital, I continue to create with these core ideas in mind, and ingrain them in everything I make. I believe that design has the power to resonate on a very personal and human level; it can share stories, build communities, and define cultures.</p>

            <p>To me, my interests in design and engineering go hand in hand. You face a challenge, you research, you ideate, you iterate. It's a process both analytic and emotional: achieving an objective with love and labor, creativity and care. ♡</p>
          </section>

          <section className='flex flex-col gap-4 bg-red'>
            <p>Outside of my work, I am the founder and president of <Link className='underline' href='https://stemchests.com/'>STEMChests</Link>, a 501(c)(3) non-profit dedicated to making STEM education accessible for young students in the DC metro area.</p>

            <p>I also work on cover art and promotional material for a couple <Link className='underline' href='https://www.instagram.com/p/C42o53fo9Iz/'>musicians</Link>.</p>

            <p>When I'm not working, you'll probably find me continuing my never-ending Zelda: Breath of the Wild run, playing piano, making a DJ mix, rock climbing, painting, napping in a cafe, staring at my phone, or maybe (just maybe) going on a morning hike.</p>

            <p>(CV coming soon!)</p>
          </section>

          <section className='flex flex-col gap-4 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Design Experience</h3>

            <Experience title='Yale Law School' year='Product Design / 2023-'>
            Designed and developed an interactive website exhibition based on archival data about Civil Rights cases. Currently in development.
            </Experience>

            <Experience title='Cimu' year='Product Design / 2023'>
            Created complete design system for an SaaS startup; analyzed both quantitative and qualitative user data to create an accessible mobile design for elderly and LEP tailors. See case study <Link className='underline' href='/cimu/casestudy'>here</Link>. 
            </Experience>
          </section>

          <section className='flex flex-col gap-4 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Research</h3>

            <Experience title='NYU Stern School of Business' year='Student Intern / 2022-23'>
              Designed and built traffic sensors to test effectiveness of educational Micro:bit controllers; research later used in curriculum of NYU undergraduate class.
            </Experience>

            <Experience title='Maryland Robotics Center' year='Pathways Intern / 2023'>
              Developed actuator gates for soft robotic appendages under supervision of Dr. Ryan D. Sochol.
            </Experience>
          </section>

          <section className='flex flex-col gap-4 text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px]'>Leadership</h3>

            <Experience title='STEMChests' year='Product Design / 2022-'>
            Designed and distributed 1000+ science kits in the DC metro area. See more <Link className='underline' href='https://www.stemchests.com'>here</Link>.  
            </Experience>

            <Experience title='Yale Spring Fling' year='Creative Team / 2023-'>
            Created promotional materials and organized Yale's largest annual concert, with over 10,000+ attendees.   
            </Experience>

            <Experience title='Design at Yale' year='Studio Member / 2023-'>
            Collaborateds on and managed various projects for Yale's only student-run design studio.   
            </Experience>
          </section>

          <section className='flex flex-col text-sm leading-4'>
            <h3 className='font-ppmondwest text-sm font-bold leading-[18px] mb-4'>Awards</h3>

            <Experience title='Scholastic Art Awards, 2x Silver Key' year='2023'></Experience>
            <Experience title='Scholastic Art Awards, 3x Honorable Mention' year='2023'></Experience>
            <Experience title='American Fine Arts Festival International Piano Competition, 1st Place' year='2023'></Experience>
          </section>
        </section>
      </article>
      
      <Footer />
    </main>
  )
}
