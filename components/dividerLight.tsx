import React from 'react'

export default function DividerLight({text}: {text?: boolean}) {
  return (
    <hr className={`border-solid border-gray-200 w-full ${text && 'max-w-text'}`} />
  )
}
