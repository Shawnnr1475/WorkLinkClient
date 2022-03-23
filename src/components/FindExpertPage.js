import {useState, useRef, useEffect} from "react"
import ReactMapGL, {Marker} from "react-map-gl"
import locationIcon from "../img/placeholder (1).png"
import expertIcon from "../img/worker.png"
import InputFindExpert from "./InputFindExpert"
import FindExpertResults from "./FindExpertResults"
import ExpertFullInfor from "./ExpertFullInfor"


const FindExpertPage = ({jobTitles, signInUser, experts, setExperts, expert, setExpert}) => {
    useEffect(async ()=>{
      const fetchExperts = await fetch("https://wlapi.herokuapp.com/experts")
      if(fetchExperts){
        const data = await fetchExperts.json()
        setExperts(data)
      }
    },[])
    let myLat = -26.3574
    let myLong = 28.2076
    if(signInUser && signInUser.coordinates){
      myLat = signInUser.coordinates[1]
      myLong = signInUser.coordinates[0]
    }

    const [viewport,setViewPort] = useState({
        latitude: myLat,
        longitude: myLong,
        width: "100vw",
        height:"100vh",
        zoom: 13
    })

    const [showFullInfor, setShowFullInfor] = useState(false)
    const [searchResults,setSearchResults] = useState([])

    const FindExpertSearch = ()=>{
        const inputs = document.getElementsByTagName("select")
        const occupation = inputs[0].value
        const range = inputs[1].value
        const results = experts.filter(expert =>{
            return(expert.occupation.toLowerCase() === occupation.toLowerCase())
        })

        setSearchResults(results)
    }

    return (
        <div className="find-expert-container">
        <ReactMapGL {...viewport}
        mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/shawnnr/ckxtit4qn253116q0j5uihzwi"
        container="find-expert-container"
        onViewportChange={viewport =>{
            setViewPort(viewport)
        }}
        className="find-expert-container"
        >
            <Marker latitude={myLat} longitude={myLong}>
                <div>
                    <img src={locationIcon}/>
                </div>
            </Marker>
            {searchResults.map((expert)=>{
              return(
                <Marker latitude={expert.coordinates[1]} longitude={expert.coordinates[0]}>
                    <div>
                        <img src={expertIcon}/>
                    </div>
                </Marker>
              );
            })}
        </ReactMapGL>
        <InputFindExpert jobTitles={jobTitles} FindExpertSearch={FindExpertSearch}/>
        {searchResults ? <FindExpertResults experts={experts} setExpert={setExpert} showFullInfor = {showFullInfor} setShowFullInfor = {setShowFullInfor} searchResults = {searchResults} setSearchResults={setSearchResults}/>:""}
        {showFullInfor ?<ExpertFullInfor signInUser = {signInUser} setShowFullInfor={setShowFullInfor} expert={expert} setExpert={setExpert} showFullInfor = {showFullInfor} setSearchResults={setSearchResults}/>:""}
        </div>
    )
}

export default FindExpertPage
