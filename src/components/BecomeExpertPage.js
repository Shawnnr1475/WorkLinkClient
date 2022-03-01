import {Link} from "react-router-dom"
import {useState, useRef} from "react"
import InputAutocomplete from "./InputAutocomplete"

const BecomeExpertPage = ({jobTitles}) => {
    const [newExpert,setNewExpert] = useState({})
    const [selectionAdress,setSelectionAddress] = useState()
    const [profilepic,setProfilePic] = useState()
    const [imgURL,setImgURL] = useState("")
    const img_containerRef = useRef()
    const passwordInput = useRef()
    const cpasswordInput = useRef()

    function setImgPreview(){
        const pic = document.querySelector(".input-img").files[0]

        if (pic){
            const reader = new FileReader()

            reader.readAsDataURL(pic)
            reader.addEventListener("load", ()=>{
                setProfilePic(reader.result)
            })
        }
    }

    function onChangeCP(){
        const div = document.getElementById("after-no-match")
        if(cpasswordInput.current.value !== passwordInput.current.value && !div){
            cpasswordInput.current.style.backgroundColor = "rgba(255, 189, 189, 0.8)"
            const div = document.createElement("div")
            div.id = "after-no-match"
            div.innerText = "No match"
            div.style.fontSize = "12px"
            passwordInput.current.after(div)
        }
        else if(cpasswordInput.current.value !== passwordInput.current.value && div) {
            cpasswordInput.current.style.backgroundColor = "rgba(255, 189, 189, 0.8)"
        }
        else{
            cpasswordInput.current.style.backgroundColor = "white"
            div.remove()
        }
    }

    function AddImg(){
      img_containerRef.current.click()
    }
    return (
        <div className="become-expert-page">
            <div className="siginup-container">
            <div className="signup-left">
                <label>Work-Link</label>
            </div>
            <div className="signup-right">
            <label> Become an Expert </label>
            <form action="https://wlapi.herokuapp.com/expert/new" method ="POST" encType="multipart/form-data">
                <div className="form-part1">
                <div className="ppic-container">
                    <input name="profilepic" type="file" ref={img_containerRef} className="input-img" onChange={setImgPreview}></input>
                    <div className="img-container" onClick={AddImg}>
                        {profilepic? <img className="ppic-img" src={profilepic}></img>:
                        <img src="/icons8-add-image-30 (1).png" ></img>}
                    </div>
                </div>
                <input type="text" placeholder="firstname" name="firstname" className="input"></input>
                <input type="text" placeholder="lastname" name="lastname" className="input"></input>
                <InputAutocomplete setSelectionAddress = {setSelectionAddress}/>
                <input type="email" placeholder="email" name="email" className="input"></input>
                <input type="tel" placeholder="cell" name="cell" className="input"></input>
                <input type="password" placeholder="password" name="password" className="input" ref = {passwordInput}></input>
                <input type="password" placeholder="confirm password" name="cpassword" className="input" ref={cpasswordInput} onChange={onChangeCP}></input>
                </div>
                <br></br>
                <div className="form-part2">
                <select name="occupation" className="input">
                  {jobTitles.map(title=>{
                    return(
                      <option value={title}>{title}</option>
                    )
                  })}
                </select>
                <textarea name="about" className="textarea-signup" style={{"height": "200p"}} placeholder="Tell us more about you and your work..."></textarea>
                </div>
                <div style={{"width" : "100%", "display": "flex", "justifyContent" : "space-between"}}>
                    <button type="button" className="btn">cancel</button>
                    <button type="Submit" className="btn">submit</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default BecomeExpertPage
