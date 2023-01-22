import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div className='about'>
            &nbsp;
            <h1>About us</h1>
            <br /><br />
            <p>
                -Pro Network is a platform where people can create professional networks, talk with various professionals by communicating, sharing knowledge, guide people, get guided by people and so on.
            </p>
            <br />
            <p>
                -At Pro Network, we have designed a system that works well for both students and professionals, and streamlined the networking/mentoring process making it easy and efficient.
            </p>
            <br />
            <p>
                -Join the amazing community of immense professinals and start helping/benefitting from awesome posts!
            </p>
            <br />            
            <Link to='/' className='home-btn'>Go to Home</Link>
        </div>
    )
}

export default About