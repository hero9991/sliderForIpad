import React, { useState, useRef } from 'react'
import c from './ThirdSlide.module.css'
import Slide from './Slides/Slide'
import tab_1 from '../../assets/slide-3/inner-slide-1/tab_1.png'
import tab_2 from '../../assets/slide-3/inner-slider-2/tab_2.png'
import tab_3 from '../../assets/slide-3/inner-slider-3/tab_3.png'



const ThirdSlide = () => {
    const [partOfRange, setPartOfRange] = useState(0)
    const slider = useRef(null)
    const inputToggle = useRef(null)

    const handleRange = (e) => {
        setPartOfRange(e.target.value)
        if (e.target.value <= 33.3) slider.current.style.left = '0'
        if (e.target.value > 33.3 && e.target.value < 66.6) slider.current.style.left = '-100%'
        if (e.target.value >= 66.6) slider.current.style.left = '-200%'
    }
    const handleColor = (e) => {
        inputToggle.current.style.background = 'linear-gradient(to right, #d1eaff 0%, #d1eaff '
            + e.target.value + '%, #435063 ' + e.target.value + '%, #435063 100%)'
    }
    
    return <div className="slide-3">
        <div ref={slider} className={c.inner__slider}>
            <Slide image={tab_1} imgClass='tab_1' title='Звенья патогенеза СД2' bg='slide__1' />
            <Slide image={tab_2} imgClass='tab_2' title='Смертельный октет' bg='slide__2' />
            <Slide image={tab_3} imgClass='tab_3' title='Звенья патогенеза СД2' bg='slide__3' />
        </div>
        <input ref={inputToggle} type='range' value={partOfRange} onChange={handleRange} onInput={handleColor} />
        <div className={c.range}>
            <div>1988</div>
            <div>2009</div>
            <div>2016</div>
        </div>
    </div>
}

export default ThirdSlide