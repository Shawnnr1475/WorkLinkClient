import {Link, useNavigate} from "react-router-dom"
import {useRef, useState} from "react"


const Login = ({expert,setExpert, setSignInUser}) => {
    const linkstyle = {
        width:"100%"
    }

    const navigate = useNavigate()

    const emailInput = useRef()
    const passwordInput = useRef()

    async function LoginUser(){

      const data = {
        email: emailInput.current.value,
        password:passwordInput.current.value
      }

      console.log(data)
      try {
        const postUserInfor = await fetch("https://wlapi.herokuapp.com/login/user",{
          headers: {
            'Content-Type': 'application/json'
          },
          method : "POST",
          body : JSON.stringify(data)
        })

        const res = await postUserInfor.json()
        if(postUserInfor.status === 200){
          setSignInUser(res)
          res.signInDate= new Date()
          await localStorage.setItem("client",JSON.stringify(res))
          navigate("/find-expert")
        }
        else if (postUserInfor.status === 404) {
          navigate("/login")
        }
      } catch (e) {
        console.log(e)
      }

    }

    return (
        <div className="login">
            <div className="login-container">
            <div className="login-top">
                <label>Work-Link</label>
            </div>
            <div className="login-bottom">
                <form className="form-login">
                    <input type="text" className="input email-input" placeholder="email" ref={emailInput}></input>
                    <input type="password" className="input password-input" placeholder="password" ref={passwordInput}></input>
                    <Link to="/signup" className="signup-login">
                        <p>Sign up</p>
                    </Link>
                    <button type="button" className="btn btn-login" onClick={LoginUser}>Login</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login
