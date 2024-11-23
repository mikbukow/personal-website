import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'
import '../../App.css'
import myPhoto1 from '../../images/photography/gg-bridge1.jpeg'
import myPhoto2 from '../../images/photography/gg-bridge2.jpeg'
import myPhoto3 from '../../images/photography/keely1.jpeg'
import myPhoto4 from '../../images/photography/keely2.jpeg'
import myPhoto5 from '../../images/photography/keely3.jpeg'
import myPhoto6 from '../../images/photography/mollie.jpeg'

function Photography() {
  return (
    <div className='page-container'>
      <h1>Photography</h1>
      <div className='cards-container'>
          <div className='cards-wrapper'>
              <ul className='cards-item'>
                  <CardItem 
                  src={myPhoto1}
                  label="Photo"
                  caption="Golden Gate Bridge"/>
                  <CardItem 
                  src={myPhoto2}
                  label="Photo"
                  caption="Golden Gate Bridge"/>
                  <CardItem 
                  src={myPhoto3}
                  label="Photo"
                  caption="Keely"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myPhoto4}
                  label="Photo"
                  caption="Keely"/>
                  <CardItem 
                  src={myPhoto5}
                  label="Photo"
                  caption="Keely"/>
                  <CardItem 
                  src={myPhoto6}
                  label="Photo"
                  caption="Mollie"/>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Photography