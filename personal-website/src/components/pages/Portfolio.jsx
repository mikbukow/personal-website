import React from 'react'
import '../../App.css'
import './Portfolio.css'
import {Button} from '../Button'


export default function Portfolio() {
  return (
    <div class='portfolio-container'>
      <h1>Portfolio</h1>
      <h3>Check out what I've been working on</h3>
      <div className='portfolio-btns'>
        <div className='portfolio-btn'>
          <Button className='btns' buttonSize={'btn--large'} path='/portfolio/artwork'> 
            Artwork
          </Button>
        </div>
        <div className='portfolio-btn'>
          <Button className='btns' buttonSize={'btn--large'} path='/portfolio/projects'> 
            Projects 
          </Button>
        </div>
        <div className='portfolio-btn'>
          <Button className='btns' buttonSize={'btn--large'} path='/portfolio/photography'> 
            Photography 
          </Button>
        </div>
      </div>
    </div>
  )
}
