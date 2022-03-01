import ImgBanner from "./ImgBanner"
import {Link} from "react-router-dom"
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-leftside">
                <div className="h1"><h1>Local and skilled experts</h1></div>
                <div className="p"><p>Get skilled experts near you for your home renovations or mantaince</p></div>
                <Link className="link" to="/signup"><button type="button" className="sign-in-btn">Sign up</button></Link>
            </div>
            <ImgBanner/>
        </div>
    )
}

export default Banner
