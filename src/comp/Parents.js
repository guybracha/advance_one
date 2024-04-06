import React from 'react'

export default function Parents(props) {
  return (
    <div className='border text-danger p-2'>
      Parents
      {props.children}
    </div>
  )
}
