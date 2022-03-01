
const MakeJobRequest = ({ setShowRightFullInfor, setShowMakeJobRequest,setShowPreviewRequest,setShowFullInfor, setSearchResults, setJobDescript}) => {
    const Next = ()=>{
        setShowMakeJobRequest(false)
        setShowPreviewRequest(true)
    }

    function Back(){
       setShowRightFullInfor(true)
       setShowMakeJobRequest(false)
    }

    function getJD(e){
      const descript = e.target.value
      setJobDescript(descript)
    }
    return (
        <div className="make-request-container">
            <h2>Make Job Request</h2>
            <textarea className="textarea" placeholder="Describe what job you want done..." onChange={(e)=>{getJD(e)}}></textarea>
            <div className="btn-container">
            <button type="button" className="btn" onClick={Back}>Back</button>
            <button type="button" className="btn" onClick={Next}>Next</button>
            </div>
        </div>
    )
}

export default MakeJobRequest
