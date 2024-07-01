import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const PrimaryBtn = () => {
  return (
    <button className='primary-btn'>
      <Link to="/contact">CONTACTANOS</Link>
    </button>
  )
}

export default PrimaryBtn
