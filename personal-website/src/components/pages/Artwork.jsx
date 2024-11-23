import React from 'react'
import CardItem from '../CardItem'
import '../../App.css'
import './Artwork.css'
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
    <div className='artwork-container'>
      <h1>Artwork</h1>
      <div className='cards-container'>
          <div className='cards-wrapper'>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt1}
                  label="Art"/>
                  <CardItem 
                  src={myArt2}
                  label="Art"/>
                  <CardItem 
                  src={myArt3}
                  label="Art"/>
                  <CardItem 
                  src={myArt4}
                  label="Art"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt5}
                  label="Art"/>
                  <CardItem 
                  src={myArt6}
                  label="Art"/>
                  <CardItem 
                  src={myArt7}
                  label="Art"/>
                  <CardItem 
                  src={myArt8}
                  label="Art"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt9}
                  label="Art"/>
                  <CardItem 
                  src={myArt10}
                  label="Art"/>
                  <CardItem 
                  src={myArt11}
                  label="Art"/>
                  <CardItem 
                  src={myArt12}
                  label="Art"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt13}
                  label="Art"/>
                  <CardItem 
                  src={myArt14}
                  label="Art"/>
                  <CardItem 
                  src={myArt15}
                  label="Art"/>
                  <CardItem 
                  src={myArt16}
                  label="Art"/>
              </ul>
              <ul className='cards-item'>
                  <CardItem 
                  src={myArt17}
                  label="Art"/>
                  <CardItem 
                  src={myArt18}
                  label="Art"/>
                  <CardItem 
                  src={myArt19}
                  label="Art"/>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Artwork