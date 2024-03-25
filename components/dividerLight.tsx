import React from 'react'

export default function DividerLight({text, next, black}: {text?: boolean, next?: boolean, black?: boolean,}) {
  return (
    <hr className={`border-solid ${black ? 'border-black' : 'border-gray-200'} w-full ${text && 'max-w-text'} ${next && '-mt-4'}`} />
  )
}
