import React from 'react'
import './wspstyles.css'

const WspButton = () => {
  return (
    <div class="wsp-container">
      <a href="https://api.whatsapp.com/send?phone=+593967417783&text=Hola, necesito mas información" class="btn_wsp" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  )
}

export default WspButton
