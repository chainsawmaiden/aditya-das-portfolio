import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import React from 'react'

export default function AboutPage() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col min-h-screen">
      <NavBar />
      <article className='flex flex-col w-2/3 gap-4 font-ppneuemontreal text-mdnm'>
      <p>Hi, I'm Aditya, and welcome to my little space of the internet! I'm an engineer, programmer, and designer based in New Haven, CT, where I study Computing and the Arts at Yale University '27.</p>

      <p>I had an engineering background in high school, but have since pivoted to design! However, as a maker in both digital and physical mediums, I strive to construct experiences that are engaging, creative, and efficient. I'm particularly interested in human-computer interaction and exploring themes of community, sentimentality, and the digital world in my work.</p>

      <p>Currently, I am a studio member of Design at Yale, a programmer on the PulseVision AI project, and on the creative teams for 17o1 Records and Yale Spring Fling. I'm also the founder of STEMChests, a student-run 501(c)(3) non-profit that has designed and distributed over 1,000 science kits to students in my home state of Maryland.</p>

      <p>In the past, I designed and 3D-printed soft robots at the Maryland Robotics Center at UMD and interned at the Stern School of Business at NYU to create low-cost Micro:bit sensors.</p>

      <p>When I'm not working, I'm probably listening to music, doodling, rock climbing, making a mix, meandering, watching a movie, having in-depth conversations with my two cats and one dog, or sleeping.</p>

      <p>Website made with ♡ and code!</p>
      </article>
      <Footer />
    </main>
  )
}
