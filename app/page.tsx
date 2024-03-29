import me from '@/public/images/home/me.jpg'
import newHaven from '@/public/images/home/new-haven.png'
import sculptor from '@/public/images/home/badhorse.jpg'
import arm from '@/public/images/home/computerarch.jpg'
import stackOverflow from '@/public/images/home/stackoverflow.png'
import photoshop from '@/public/images/home/photoshop.png'
import music from '@/public/images/home/beyonce-deathgrips.jpg'
import flx4 from '@/public/images/home/flx4.png'

import NavBar from "@/components/navbar";
import Image from "next/image";
import HomeProjects from "@/components/homeProjects";
import HoverImage from "@/components/hoverImage";
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col">
        <NavBar />
        <section className='min-h-fit md:min-h-[84vh] flex flex-col justify-end'>
          <h1 className="md:text-xlnm text-mdnm text-left md:w-1/2 w-full mr-auto">
            <HoverImage src={me}>Aditya Das</HoverImage> is a multidisciplinary <HoverImage src={photoshop}>designer</HoverImage> and <HoverImage src={stackOverflow}>engineer</HoverImage> currently based in <HoverImage src={newHaven}>New Haven, CT</HoverImage>. He is passionate about exploring the intersection of <HoverImage src={sculptor}>art</HoverImage> and <HoverImage src={arm}>technology</HoverImage> to tell stories and support communities. He has previously designed for 17o1 Records and Cimu. He also does <HoverImage src={flx4}>odd jobs</HoverImage> on the side. He is currently working as a product designer at Yale Law School. ↓
          </h1>
          <hr className=' border-solid border-black my-8'></hr>
        </section>
      <HomeProjects />
      <Footer />
    </main>
  );
}
