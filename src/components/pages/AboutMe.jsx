import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import Pdf from '../../documents/Mikaela_Bukow_Resume.pdf';
import myPicture from '../../images/linkedin-photo.jpeg';

function AboutMe() {
  return (
    <div id='about-me' className='about-me'>
      <div className='about-me-container'>
        <img src={myPicture} alt='profile-pic'/>

        <div className="about-me-text">
          <h1>About Me</h1>
          <p>
            Hi there! I’m Mikaela and I’m currently a Software Development Engineer in Test at SIE PlayStation located in San Francisco, California. 
            I grew up in southeastern Massachusetts and attended Rensselaer Polytechnic Institute, where I obtained my Bachelor’s degree in Computer Science. 
            Some of my hobbies include running, hiking, painting and illustrating. 
            I’ve also recently picked up wheel pottery and am self teaching myself animation. 
            I’m passionate about creating things, whether it be automated solutions, artwork or some new ceramic mugs! 
          </p>
          <div className='about-me-links'>
            <Link className='social-icons-links linkedin' 
              to='https://linkedin.com/in/mikaela-b-41844b125' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin fa-3x'></i>
            </Link>
            <Link className='social-icons-links github' 
              to='https://github.com/mikbukow' target='_blank' aria-label='Github'>
              <i className='fab fa-github fa-3x'></i>
            </Link>
            <Link className='social-icons-links resume' 
              to={Pdf} target='_blank' aria-label='resume'>
                <i className='fa-solid fa-file fa-3x'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;