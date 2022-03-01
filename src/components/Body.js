import ClientIcon from "../img/clienticon.png"
import WorkerIcon from "../img/images.jpg"
const Body = () => {
    return (
        <div className="body-container">
            <div className="body-row row-1" >
                <div><img className="icon client-icon" alt="client icon" src={ClientIcon}/></div>
                <div><p>1000 client that are satisfied with our experts</p></div>
            </div>
            <div className="body-row row-2">
                <div><img className="icon worker-icon" alt="client icon" src={WorkerIcon}/></div>
                <div><p>100 reggistered experts across the province and near you</p></div>
            </div>
        </div>
    )
}

export default Body
