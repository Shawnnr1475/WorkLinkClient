import {useState} from "react"
import { useNavigate } from "react-router-dom"
import InputAutocomplete from "./InputAutocomplete"
const Signup =() => {
    const [selectionAddress,setSelectionAddress] = useState("")
    const navigate = useNavigate()

    function onSignUp(e){
        e.preventDefault()
        const inputs = document.querySelectorAll("input")

        if(inputs[6].value === inputs[7].value){
            const dataToStore ={
                firstname : inputs[0].value,
                lastname : inputs[1].value,
                address : selectionAddress.name_place,
                coordinate: selectionAddress.coordinate,
                email : inputs[4].value,
                cell : inputs[5].value,
                password : inputs[6].value,
            }

          RegisterUser(dataToStore)
        }
        else{
            inputs[7].style.backgroundColor = "rgba(255, 189, 189, 0.8)"
        }

    }

    function onChangeCP(){
        const inputs = document.querySelectorAll("input")
        const div = document.getElementById("after-no-match")
        if(inputs[6].value !== inputs[7].value && !div){
            inputs[7].style.backgroundColor = "rgba(255, 189, 189, 0.8)"
            const div = document.createElement("div")
            div.id = "after-no-match"
            div.innerText = "No match"
            div.style.fontSize = "12px"
            inputs[6].after(div)
        }
        else if(inputs[6].value !== inputs[7].value && div) {
            inputs[7].style.backgroundColor = "rgba(255, 189, 189, 0.8)"
        }
        else{
            inputs[7].style.backgroundColor = "white"
            div.remove()
        }
    }

    async function RegisterUser(data){
      const postUserInfor = await fetch("https://wlapi.herokuapp.com/signup/user",{
        headers: {
          'Content-Type': 'application/json'
        },
        method : "POST",
        body : JSON.stringify(data)
      })

      const res = await postUserInfor.json()
      if(res){
        navigate("/login")
      }
    }

    return (
        <div className="signup">
            <div className="siginup-container">
            <div className="signup-left">
                <label>Work-Link</label>
            </div>
            <div className="signup-right">
            <label> Sign up </label>
            <p>Enter your correct details</p>
                <form className="form-signup" onSubmit={onSignUp}>
                    <input type="text" className="input fname-input" placeholder="Firstname" required></input>
                    <input type="text" className="input lname-input" placeholder="Lastname" required></input>
                    <InputAutocomplete setSelectionAddress={setSelectionAddress}/>
                    <input type="email" className="input email-input" placeholder="Email" required></input>
                    <input type="tel" className="input cell-input" placeholder="Cell" required></input>
                    <input type="password" className="input password-input" placeholder="Password" required></input>
                    <input type="password" className="input cpassword-input" placeholder="Confirm password" required onChange={onChangeCP}></input>
                    <button type="submit" className="btn btn-signup">Sign up</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Signup
