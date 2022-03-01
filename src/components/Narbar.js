import { Link } from "react-router-dom"
const Narbar = ({signInUser}) => {
    return (
        <div className="navbar-container">
            <div className="navbar-leftside">
                <label>WORK-LINK</label>
            </div>
            <div className="navbar-rightside">
                <Link to="/"><button className="nav-link home">Home</button></Link>
                <Link to="/"><button className="nav-link about">About</button></Link>
                {!signInUser
                ?<Link to="/login"><button className="nav-link sign-in">Sign in</button></Link>
                :<Link to="/"><button className="nav-link account">Account</button></Link>}
            </div>
        </div>
    )
}

export default Narbar
