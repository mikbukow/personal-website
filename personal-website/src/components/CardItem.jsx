import React, {useState} from 'react'

export const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
      {caption.length > 0 && <div className="caption">{caption}</div>}
    </div>
  )
}

function CardItem(props) {

  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)

  return (
    <div className='card-item-container'>
        <li className='card-item'>
            <figure className='card-item-pic-wrap' data-category={props.label}>
                {/* <img src={props.src} alt="Artwork Image" 
                 className='card-item-img'/> */}
                 <img className='card-item-img'
                 onClick={showModal}
                 src={props.src}
                 alt="art" />
                 {isOpen && (
                  <Modal
                  src={props.src}
                  alt={props.label}
                  caption={props.caption}
                  onClose={() => setIsOpen(false)}/>
                 )}
                
            </figure>            
        </li>
    </div>
  )
}

export default CardItem