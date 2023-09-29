import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
        <Link href="/">Luxury Estate</Link>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Properties</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
        </ul>
    </nav>
  )
}

export default Nav