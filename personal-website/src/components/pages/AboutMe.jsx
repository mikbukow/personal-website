import React from 'react';
import './AboutMe.css';
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
        </div>
      </div>
    </div>
  )
}

export default AboutMe;