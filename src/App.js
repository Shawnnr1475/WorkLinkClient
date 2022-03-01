import Main from "./components/Main";
import FindExpertPage from "./components/FindExpertPage";
import BecomeExpertPage from "./components/BecomeExpertPage";
import Login from "./components/Login"
import Signup from "./components/Signup"
import {Route,Routes} from "react-router-dom";
import {useState, useEffect} from "react"
import InputAutocomplete from "./components/InputAutocomplete";
function App(){
  useEffect(()=>{
    async function getSignInUser(){
      const user = await localStorage.getItem("client")
      console.log(user)

      if(user){
        setSignInUser(JSON.parse(user))
      }
    }
    getSignInUser()
  },[])
  const jobTitles = ["Painter","Roofing","Brick Layer", "Tile Installer", "Gardener", "Plumber", "Electrician", "Ceiling"]
  const [signInUser, setSignInUser] = useState(null)
  const [experts,setExperts] = useState([])
  const [expert,setExpert] = useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main signInUser={signInUser}/>}/>
        <Route path="/find-expert" element={<FindExpertPage
        signInUser={signInUser}
        setExperts={setExperts}
        experts={experts}
        expert={expert}
        setExpert = {setExpert}
        jobTitles = {jobTitles}
        />}/>
        <Route path="/become-expert" element={<BecomeExpertPage jobTitles={jobTitles}/>}/>
        <Route path="/login" element={<Login expert={expert} setExpert={setExpert} setSignInUser={setSignInUser}/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
