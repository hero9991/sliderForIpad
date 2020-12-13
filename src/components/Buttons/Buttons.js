import React from 'react'

const Buttons = ({currentSlide, setCurrentSlide, slider}) => {
    return <div className='buttons'>
    <button className={currentSlide === 0 ? 'active-btn' : undefined} onClick={() => {
      slider.current.style.bottom = `0`;
      setCurrentSlide(0)
    }}></button>
    <button className={currentSlide === 1 ? 'active-btn' : undefined} onClick={() => {
      slider.current.style.bottom = `100vh`;
      setCurrentSlide(1)
    }}></button>
    <button className={currentSlide === 2 ? 'active-btn' : undefined} onClick={() => {
      slider.current.style.bottom = `200vh`;
      setCurrentSlide(2)
    }}></button>
  </div>
}

export default Buttons