import { Link } from "react-router-dom"
const FindWorker = () => {
    return (
        <div className="findworker-container">
            <div className="findworker-leftside">
                <img className="img-map" src="https://www.zyrgon.com/wp-content/uploads/2019/06/googlemaps-Zyrgon.jpg"/>
            </div>
            <div className="findworker-rightside">
                <h1>Find an expert near you</h1>
                <p>Do you need someone to do renovations or maintaince on your home. Click the below ro find the painters, bricklayers, etc near you</p>
                <Link to="/find-expert" ><button type="button" className="find-expect-btn">Find Expert</button></Link>
            </div>
        </div>
    )
}

export default FindWorker
