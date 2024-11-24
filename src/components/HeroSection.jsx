import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css'
import '../App.css'
import {Button} from './Button';
import AboutMe from './pages/AboutMe';


export default function HeroSection() {
    return (
      <div className='hero'>
          <div className='hero-container'>
            <h1>Mikaela Bukow</h1>
            <span className="hero-container-me">
                Hi! I'm a 
                <Typewriter words={[' Developer', ' Coder', 'n Artist', ' Tester']} loop={0}
                cursor={true}  />
            </span>
            <div className='hero-btn'>
              <Button buttonSize={'btn--medium'} path={'/about-me'}>
                About Me
              </Button>
            </div>
          </div>
      </div>
    )
  }
