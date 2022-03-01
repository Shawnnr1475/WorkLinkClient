
const RightFullInfor = ({expert,setShowFullInfor,setShowRightFullInfor,setShowMakeJobRequest}) => {

    const RequestJob = ()=>{
        setShowRightFullInfor(false)
        setShowMakeJobRequest(true)
    }
    return (
        <div>
                <h4>Address:</h4>
                <p>{expert.address}</p>
                <h4>Occupation:</h4>
                <p>{expert.occupation}</p>
                <h4>About:</h4>
                <p>{expert.about}</p>
                <h4>Rating:</h4>
                <p>{expert.rating}</p>
                <h4>Photos</h4>
                {expert.photos.map(photo =>{
                    <img src={photo}/>
                })}
                <h4>Status:</h4>
                <p style={{color:"green"}}>{expert.available}</p>
                <div className="btn-container">
                <button type="button" className="btn" onClick={RequestJob}>Request Job</button>
                <button type="button" className="btn" onClick={()=>{setShowFullInfor(false)}}>Close</button>
                </div>

        </div>
    )
}

export default RightFullInfor
