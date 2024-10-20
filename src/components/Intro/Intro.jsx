import React from 'react'
import './intro.css'
import bg from '../../assets/bg.jpg'
// import btnImg from '../../assets/hireme.png'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className="introContent">
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Shalini</span> <br />Website Designer</span>
          <p className='introPara'>I am a Girl 😒🙎‍♀️ I want to be a Developer and I also want <br /> a good job so I can travel many places😁</p>
          <Link><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
      </section>
    </div>
  )
}

export default Intro
