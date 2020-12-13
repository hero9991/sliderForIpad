import React from 'react'
import c from './FirstSlide.module.css'

const FirstSlide = ({currentSlide}) => {
    return <div className='slide-1'>
        <div className={c.title}>Всегда ли цели терапии СД2 на поверхности?</div>
        <div className={c.text}>
            <div className={c.text_1}>Цель по HbA1c</div>
            <div className={c.text_2}>Гипогликемия</div>
            <div className={c.text_3}>Осложнения СД</div>
            <div className={c.text_4}>СС риски</div>
        </div>
        <div className={currentSlide === 0 ? c.active_bottom + ' ' + c.bottom : undefined}>
            <span>Листайте вниз</span>
        </div>
    </div>
}

export default FirstSlide