import {useState} from "react"
import "./inputautocomplet.css"
const InputAutocomplete = ({setSelectionAddress}) => {
    const [wordEntered,setWordEntered] = useState("")
    const [dataFilterd,setDataFiltered] = useState([])
    const [coordinates,setCoordinates] = useState([])
    const placeholder = "Address"

    const fetchData = async()=>{
        setDataFiltered([])
        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${wordEntered.replace(" ","%20")}.json?types=place%2Cpostcode%2Caddress&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,{
            method: "GET"
        })
        const data = await res.json()
        if(data.message !== "Not Found"){
        const addresses = []
        data.features.map(feature=>{
            const coordinate = feature.geometry.coordinates
            const place_name = feature.place_name
            console.log(coordinates, place_name)

            const address = {
                name_place : place_name,
                coordinate : coordinate
            }
            addresses.push(address)
        })
        setDataFiltered([...addresses])
        }
    }
    function SelectAddress(e){
        const selection = dataFilterd.filter(data=>{
            return data.name_place === e.target.innerText
        })
        setSelectionAddress(selection[0])
        setCoordinates(selection[0].coordinate)
        setWordEntered(e.target.innerText)
        setDataFiltered([])

    }

    function InputOnChange(e){
        const inputValue = e.target.value
        setWordEntered(inputValue)
        try{
            fetchData()
        }catch (e){
            console.log(e)
        }

    }
    return (
        <div className="input-auto-container">
            <input name="address" className="input-auto input" placeholder={placeholder} onChange={e=>{InputOnChange(e)}} value={wordEntered} required></input>
            <input name= "coordinates" value={`${coordinates[0] +", " + coordinates[1]}`} style={{width:0, height:0, border:"none"}}></input>
            {dataFilterd.length !== 0 && wordEntered !== "" ?<div className="auto-results-container">
                {dataFilterd.slice(0,10).map(data=>{
                    return(
                        <div className="output" data={data} onClick={e=>{SelectAddress(e)}}>{data.name_place}</div>
                    )
                })}
            </div>:null}
        </div>
    )
}

export default InputAutocomplete
