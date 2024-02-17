import React from 'react'

export default function StatsColumn({title, details}: {title: string, details: string[]}) {
  return (
    <div className='flex flex-col'>
      <p className='font-ppmondwest font-bold text-smmw'>{title}</p>
      {details.map((detail: string) => 
        (<p className='font-ppneuemontreal font-normal text-smnm opacity-65' key={detail}>{detail}</p>)
      )}
    </div>
  )
}
