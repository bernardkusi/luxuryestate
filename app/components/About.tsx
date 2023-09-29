import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className="page">
        <div className="abouttext">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quisquam saepe sapiente iusto tempore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad odio nemo nam ratione, aliquam doloribus aut labore provident hic placeat deserunt totam.
          </p>
          <Link className='click' href={'/'}>Click Here</Link>
        </div>
        <div className="image">

        </div>
      </div>
    </div>
  )
}

export default About