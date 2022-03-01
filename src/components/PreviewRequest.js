
const PreviewRequest = ({setShowMakeJobRequest, setShowPreviewRequest, expert, signInUser, jobDescript, setSearchResults, setShowFullInfor}) => {
  function SendRequest(){
    setSearchResults([])
    setShowFullInfor(false)
  }

  function Back(){
    setShowMakeJobRequest(true)
    setShowPreviewRequest(false)
  }
  return(
    <div>
      <h3>Preview request</h3>
      <h4>To:</h4>
      <p>{expert.firstname + " " + expert.lastname}</p>
      <h4>From:</h4>
      <p>{signInUser.firstname + " " + signInUser.lastname}</p>
      <h4>Job</h4>
      <p>{expert.occupation}</p>
      <h4>Job description</h4>
      <p>{jobDescript}</p>
      <h4>Contacts</h4>
      <p>{signInUser.cell}</p>
      <p>{signInUser.email}</p>
      <div className="btn-container">
      <button type="button" className="btn" onClick={Back}>Back</button>
      <button type="button" className="btn" onClick={SendRequest}>Request Job</button>
      </div>
    </div>
  )
}

export default PreviewRequest
