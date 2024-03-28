import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"


export const metadata: Metadata = {
  title: "Aditya Das | Design",
  description: "Aditya Das is a designer and engineer based in New Haven, CT.",
  icons: {
    icon: '/icon.ico',
  },
};

const ppmondwest = localFont({
  src: [
    {
      path: '../public/fonts/PPMondwest-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/PPMondwest-Bold.otf',
      weight: '700'
    },
  ],
  variable: '--font-ppmondwest'
})

const ppneuebit = localFont({
  src: [
    {
      path: '../public/fonts/PPNeueBit-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/PPNeueBit-Bold.otf',
      weight: '700'
    },
  ],
  variable: '--font-ppneuebit'
})

const ppneuemontreal = localFont({
  src: [
    {
      path: '../public/fonts/PPNeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPNeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPNeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-ppneuemontreal'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ppmondwest.variable} ${ppneuemontreal.variable} ${ppneuebit.variable} w-full max-h-screen max-w-[96rem] mx-auto overflow-y-auto selection:bg-fuchsia-200`}>{children}</body>
    </html>
  );
}
