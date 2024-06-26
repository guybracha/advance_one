import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-info p-2'>
        <div className='container'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </header>
  )
}
