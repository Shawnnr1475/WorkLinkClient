import {useState} from "react"
import RightFullInfor from "./RightFullInfor"
import MakeJobRequest from "./MakeJobRequest"
import PreviewRequest from "./PreviewRequest"

const ExpertFullInfor = ({expert, setShowFullInfor, setSearchResults, signInUser}) => {
    const [showRightFullInfor,setShowRightFullInfor] = useState(true)
    const [showMakeJobRequest,setShowMakeJobRequest] = useState(false)
    const [showPreviewRequest, setShowPreviewRequest] =useState(false)
    const [jobDescript, setJobDescript] = useState("")
    return (
        <div className="full-infor-background">
            <div className="full-infor-container">
            <div className="left-full-infor">
                <div className="ppic-container">
                  <div className="img-container">
                      <img className="ppic-img" src={`https://wlapi.herokuapp.com/upload/profile/experts/${expert.profilepic}`}></img>:
                  </div>
                </div>
                <h3>{expert.firstname + " " + expert.lastname}</h3>
                <h4>Contact details</h4>
                <p>Email</p>
                <p>{expert.email}</p>
                <p>Cell</p>
                <p>{expert.cell}</p>
            </div>
            <div className="right-full-infor">
                {showRightFullInfor?<RightFullInfor setShowRightFullInfor={setShowRightFullInfor} setShowMakeJobRequest={setShowMakeJobRequest} expert={expert} setShowFullInfor={setShowFullInfor}/>:""}
                {showMakeJobRequest?<MakeJobRequest  setShowRightFullInfor={setShowRightFullInfor} setShowMakeJobRequest={setShowMakeJobRequest} setShowPreviewRequest={setShowPreviewRequest} setShowFullInfor={setShowFullInfor} setJobDescript= {setJobDescript}/>:""}
                {showPreviewRequest ? <PreviewRequest setShowPreviewRequest={setShowPreviewRequest} setShowMakeJobRequest={setShowMakeJobRequest} setShowFullInfor={setShowFullInfor} setSearchResults={setSearchResults} expert = {expert} signInUser={signInUser} jobDescript={jobDescript}/> : ""}
            </div>
            </div>
        </div>
    )
}

export default ExpertFullInfor
