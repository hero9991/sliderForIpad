import c from '../ThirdSlide.module.css'

const Slide = ({bg, image, title, imgClass}) => {
    return <div className={c[bg] + ' ' + c.slide}>
        <div className={c.title_3}>{title}</div>
        <img className={c[imgClass]} src={image} alt=''/>
    </div>
}

export default Slide