
const ResultsInfor = ({expert, setExpert, setShowFullInfor}) => {
    function ViewFullInfor(){
        setExpert(expert)
        setShowFullInfor(true)
    }
    return (

        <div className="result-infor" onClick={ViewFullInfor}>
            <div className="ppic-container">
                <div className="img-container">
                    <img className="ppic-img" src={`http://localhost:5000/upload/profile/experts/${expert.profilepic}`}></img>:
                </div>
            </div>
            <div className="expert-details">
                <h3>{expert.firstname + " " + expert.lastname}</h3>
                <h4>{expert.occupation}</h4>
                <h4>{"rating: "+ expert.rating}</h4>
                <p style={{color:"green"}}>{expert.available}</p>
            </div>

        </div>
    )
}

export default ResultsInfor
