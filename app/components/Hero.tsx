import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div id='hero'>
            <div className="intro">
                <h1>Luxury Estate</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quisquam saepe sapiente iusto tempore!</p>
                <Link className='click' href={'/'}>Click Here</Link>
            </div>
            <div className="image">

            </div>
        </div>
    )
}

export default Hero