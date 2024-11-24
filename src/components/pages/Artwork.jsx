import React from 'react'
import CardItem from '../CardItem'
import '../../App.css'
import './Cards.css'
import myArt1 from '../../images/art/gg-bridge.jpeg'
import myArt2 from '../../images/art/rainy-night.jpeg'
import myArt3 from '../../images/art/3boats.jpeg'
import myArt4 from '../../images/art/bird-feeder.jpeg'
import myArt5 from '../../images/art/blurry.jpeg'
import myArt6 from '../../images/art/candle.jpeg'
import myArt7 from '../../images/art/castle-island.jpeg'
import myArt8 from '../../images/art/elephant-drawing.jpeg'
import myArt9 from '../../images/art/eye.jpeg'
import myArt10 from '../../images/art/hand.jpeg'
import myArt11 from '../../images/art/humming-bird.jpeg'
import myArt12 from '../../images/art/lake-at-dusk.jpeg'
import myArt13 from '../../images/art/light-house.jpeg'
import myArt14 from '../../images/art/lips-drawing.jpeg'
import myArt15 from '../../images/art/mans-best-friend.jpeg'
import myArt16 from '../../images/art/mouth.jpeg'
import myArt17 from '../../images/art/nose.jpeg'
import myArt18 from '../../images/art/pappys-bird.jpeg'
import myArt19 from '../../images/art/mural.jpeg'

function Artwork() {
  return (
    <div className='page-container'>
      <h1>Artwork</h1>
      <div className='cards-container'>
          <div className='cards-wrapper'>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt1}
                  label="Art"
                  caption="Golden Gate Bridge - Acrylic"/>
                  <CardItem 
                  src={myArt2}
                  label="Art"
                  caption="Rainy Night - Acrylic"/>
                  <CardItem 
                  src={myArt3}
                  label="Art"
                  caption="3 Boats - Acrylic"/>
                  <CardItem 
                  src={myArt4}
                  label="Art"
                  caption="Bird Feeder - Acrylic"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt5}
                  label="Art"
                  caption="Blurry - Procreate"/>
                  <CardItem 
                  src={myArt6}
                  label="Art"
                  caption="Candle - Procreate"/>
                  <CardItem 
                  src={myArt7}
                  label="Art"
                  caption="Castle Island - Acrylic"/>
                  <CardItem 
                  src={myArt8}
                  label="Art"
                  caption="Elephant - Pencil"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt9}
                  label="Art"
                  caption="Eyeball - Procreate"/>
                  <CardItem 
                  src={myArt10}
                  label="Art"
                  caption="Hand - Charcoal"/>
                  <CardItem 
                  src={myArt11}
                  label="Art"
                  caption="Humming Bird - Acrylic"/>
                  <CardItem 
                  src={myArt12}
                  label="Art"
                  caption="Lake at Dusk - Acrylic"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt13}
                  label="Art"
                  caption="Lighthouse - Acrylic"/>
                  <CardItem 
                  src={myArt14}
                  label="Art"
                  caption="Mouth - Pencil"/>
                  <CardItem 
                  src={myArt15}
                  label="Art"
                  caption="Man's Best Friend - Acrylic"/>
                  <CardItem 
                  src={myArt16}
                  label="Art"
                  caption="Lips - Procreate"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt17}
                  label="Art"
                  caption="Just a Nose - Procreate"/>
                  <CardItem 
                  src={myArt18}
                  label="Art"
                  caption="Pappy's Bird - Acrylic"/>
                  <CardItem 
                  src={myArt19}
                  label="Art"
                  caption="Mural - Acrylic"/>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Artwork