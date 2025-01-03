import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = [];
const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({children, buttonStyle, buttonSize, path, target="_self"}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]
  return (
    <div className='hero-btn'>
      <Link to={path} target={target}>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
            {children}
        </button>
      </Link>
    </div>
  )
};