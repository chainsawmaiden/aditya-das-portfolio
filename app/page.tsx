import me from '@/public/images/home/me.jpg'
import newHaven from '@/public/images/home/new-haven.png'
import sculptor from '@/public/images/home/sculptor.png'
import arm from '@/public/images/home/robotic-arm.png'
import jam from '@/public/images/home/jam.jpeg'
import danceNation from '@/public/images/home/dance-nation.jpg'
import music from '@/public/images/home/beyonce-deathgrips.jpg'
import bear from '@/public/images/home/jeremy-allen-white.gif'

import NavBar from "@/components/navbar";
import Image from "next/image";
import HomeProjects from "@/components/homeProjects";
import HoverImage from "@/components/hoverImage";
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full px-4 font-ppneuemontreal text-smnm gap-0 flex flex-col">
        <NavBar home />
        <h1 className="md:text-xlnm text-mdnm text-left w-5/6 mr-auto pt-18 lg:pb-24 py-[4.5rem]">
          <HoverImage src={me}>Aditya Das</HoverImage> is a multidisciplinary <HoverImage src={danceNation}>designer</HoverImage> and engineer based in <HoverImage src={newHaven}>New Haven, CT</HoverImage>. He is passionate about exploring the intersection of <HoverImage src={sculptor}>art</HoverImage> and <HoverImage src={arm}>technology</HoverImage> to tell stories and <HoverImage src={music}>foster human connection</HoverImage>. He has previously designed for <HoverImage src={jam}>17o1 Records</HoverImage> and Cimu. He also does <HoverImage src={bear}>odd jobs</HoverImage> on the side. He is currently working as a product designer at Yale Law School. ↓
        </h1>
      <HomeProjects />
      <Footer />
    </main>
  );
}
