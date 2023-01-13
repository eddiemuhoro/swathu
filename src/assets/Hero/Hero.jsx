import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/hero.css'
const Hero = () => {
  return (
    <div className='hero-container'>
        <section className='blank'></section>
        <section className='title'>
            <h1>Instant Consultation</h1>
            <h1>With Trusted Doctors</h1>
            <button>Book Online Consultation</button>
        </section>
    </div>
  )
}

export default Hero