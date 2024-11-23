import React, {useState} from 'react'

function CardItem(props) {

  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // var state = { isOpen: false };

  // const handleShowDialog = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  //   console.log("clicked");
  // };

  return (
    <div className='card-item-container'>
        <li className='card-item'>
            <figure className='card-item-pic-wrap' data-category={props.label}>
                <img src={props.src} alt="Artwork Image" 
                 className='card-item-img'/>
            </figure>            
        </li>
    </div>
  )
}

export default CardItem