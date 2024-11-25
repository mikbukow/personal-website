import React from 'react'
import { Button } from '../Button';
import './Projects.css'

function Projects() {
  return (
    <div className='projects-container'>
      <h1>
        Projects
      </h1>
      <div className='projects-container'>
        <Button className='btns' buttonSize={'btn--large'} path='https://github.com/mikbukow/personal-website' target="_blank"> 
            Website
            <p className='project-description'>
              <p className='project-tools'>
                React Javascript HTML CSS
              </p>
              <p>This Personal Portfolio Website</p>
              <i className='fab fa-github fa-2x'></i>
            </p>
          </Button>
      </div>
    </div>
  )
}

export default Projects