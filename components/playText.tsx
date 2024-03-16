import React from 'react'

export default function PlayText({year, title, description}: {year: string, title: string, description: string,}) {
  return (
    <div className='flex flex-col'>
      <p className='font-ppneuebit text-smnb uppercase font-bold text-gray-600 '>{year}</p>
      <h1 className='font-ppmondwest text-smmw'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
