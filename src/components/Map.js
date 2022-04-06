import mapboxgl from '!mapbox-gl';
import {useState, useRef, useEffect} from "react"
import InputFindExpert from "./InputFindExpert"
import locationIcon from "../img/placeholder (1).png"
import workerloader from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({jobTitles, signInUser, experts, setExperts, expert, setExpert})=>{
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/shawnnr/ckxtit4qn253116q0j5uihzwi",
        center: [lng, lat],
        zoom: zoom
        });

   x
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = "url('/placeholder (1).png')"
        new mapboxgl.Marker(el)
         .setLngLat([28.2076, -26.3574])
         .addTo(map.current);
          
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });

    });


         
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(28.2076);
    const [lat, setLat] = useState(-26.3574);
    const [zoom, setZoom] = useState(12);// starting zoo
    

    if(signInUser && signInUser.coordinates){
        setLat(signInUser.coordinates[1])
        setLng(signInUser.coordinates[0])
      }

    return(
    <div>
        <div className='find-expert-input'>
        <form className="find-expert-input-form-container">
                <div className="row row-1">
                    <label>Occupation</label>
                    <select>
                        {jobTitles.map(title=>{
                          return(
                            <option value={title}>{title}</option>
                          )
                        })}
                    </select>
                </div>
                <div className="row row-2">
                    <label>Range</label>
                    <select>
                        <option value="0-5km">0-5km</option>
                        <option value="5-10km">5-10km</option>
                        <option value="10-15km">10-15km</option>
                        <option value="20-30km">20-30km</option>
                        <option value="30-40km">30-40km</option>
                        <option value="40-50km">40-50km</option>
                        <option value="above">Above</option>
                        <option value="all">All</option>
                    </select>
                </div>
            </form>
            <div className="row row-3">
                    <button className="find-btn" type="button">Find</button>
            </div>
        </div>
        <div ref={mapContainer} className="map-container" />
    </div>
    )
}

export default Map
