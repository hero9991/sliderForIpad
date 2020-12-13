import './App.css'
import React, { useRef, useState } from 'react'
import FirstSlide from './components/FirstSlide/FirstSlide'
import SecondSlide from './components/SecondSlide/SecondSlide'
import ThirdSlide from './components/ThirdSlide/ThirdSlide'
import Buttons from './components/Buttons/Buttons'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startPositionY, setStartPositionY] = useState(0)
  const slider = useRef(null)

  const handleStartTouch = (e) => {
    setStartPositionY(e.touches[0].pageY)
  }
  const handleEndTouch = (e) => {
    if (e.changedTouches[0].pageY < startPositionY && startPositionY-e.changedTouches[0].pageY > 100) {
      if (currentSlide === 2) {
        slider.current.style.bottom = `0`
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
        slider.current.style.bottom = `${(currentSlide + 1) * 100}vh`
      }
    }
    if (e.changedTouches[0].pageY > startPositionY && startPositionY-e.changedTouches[0].pageY < -100) {
      if (currentSlide === 0) {
        slider.current.style.bottom = `200vh`
        setCurrentSlide(2)
      } else {
        setCurrentSlide(currentSlide - 1)
        slider.current.style.bottom = `${(currentSlide - 1) * 100}vh`
      }
    }
  }
  const handleMoveTouch = (e) => {
    const substr = e.touches[0].pageY - startPositionY
    if ((substr > 0 && currentSlide === 0) || (substr < 0 && currentSlide === 2)) return
    if (Math.abs(substr) > 100) slider.current.style.bottom = `${currentSlide * 768 - substr}px`
  }

  return (
    <div className='App'>
      <div ref={slider} onTouchStart={handleStartTouch} onTouchEnd={handleEndTouch} onTouchMove={handleMoveTouch} className='slider'>
        <FirstSlide currentSlide={currentSlide} />
        <SecondSlide />
        <ThirdSlide />
      </div>
      <Buttons currentSlide={currentSlide} slider={slider} setCurrentSlide={setCurrentSlide} />
    </div >
  )
}



export default App
