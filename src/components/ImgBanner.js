import icon1 from "../img/brickwall (1).png"
import icon2 from "../img/painter (1).png"
import icon3 from "../img/wrench.png"
import icon4 from "../img/electric.png"
import icon5 from "../img/gardening-tools.png"
import icon6 from "../img/construction.png"
import icon7 from "../img/roof.png"
import {gsap} from "gsap"
import {useRef,useEffect} from "react"

const ImgBanner = () => {
    const icon1Ref = useRef()
    const icon2Ref = useRef()
    const icon3Ref = useRef()
    const icon4Ref = useRef()
    const icon5Ref = useRef()
    const icon6Ref = useRef()
    const icon7Ref = useRef()
    const icon8Ref = useRef()
    const icon9Ref = useRef()

    const tl = gsap.timeline({defaults:{duration:0.8}})

    useEffect(() => {
        tl.fromTo(icon1Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon2Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon3Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon4Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon5Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon6Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon7Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon8Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});
        tl.fromTo(icon9Ref.current, { scale:"0"},{scale:"1", rotateY:"360deg"});

      },[]);

    return (
        <div className="img-banner-container">
            <div className="rotating-grid">
                <div className="banner-icon-container">
                    <img ref={icon1Ref} className="banner-icons" src={icon1}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon2Ref} className="banner-icons" src={icon2}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon3Ref}  className="banner-icons" src={icon3}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon4Ref}  className="banner-icons" src={icon4}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon5Ref}  className="banner-icons" src={icon5}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon6Ref}  className="banner-icons" src={icon6}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon7Ref}  className="banner-icons" src={icon7}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon8Ref}  className="banner-icons" src={icon2}/>
                </div>
                <div className="banner-icon-container">
                    <img ref={icon9Ref}  className="banner-icons" src={icon2}/>
                </div>
            </div>
        </div>
    )
}

export default ImgBanner
