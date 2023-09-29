import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>
                <p className="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum similique commodi vero, reiciendis totam ab error repellendus, magnam vel sed asperiores? Odit reprehenderit, explicabo itaque aliquam veritatis ex omnis, numquam vel voluptatem quibusdam ea ab ad, dolorem consequuntur hic iure in maxime tempora dolores!
                </p>

                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Properties</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Blog</Link>
                </ul>

                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Properties</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Blog</Link>
                </ul>
            </div>
            <p className="copy">Copyright &copy; 2023</p>
        </footer>
    )
}

export default Footer