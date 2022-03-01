import {Link} from "react-router-dom"
const BeAnExpert = () => {
    return (
        <div className="be-expert-container">
            <div className="be-expert-leftside">
                <h1>Become An Expert</h1>
                <p>Are you a contructor and looking for clients near you. Join our team of experts and start working now</p>
                <Link to="/become-expert"><button type="button" className="become-expect-btn">Become an Expert</button></Link>
            </div>
            <div className="be-expert-rightside">
                <img className="img-map" src="https://media.istockphoto.com/photos/renovation-of-studio-room-picture-id1146295665?k=20&m=1146295665&s=612x612&w=0&h=b9jaZef5NKQTWZTFSG-SdMQQkzc--7_JGnAa4lJkf94="/>
            </div>
        </div>
    )
}

export default BeAnExpert
