import Narbar from "./Narbar";
import Banner from "./Banner"
import Body from "./Body";
import FindWorker from "./FindWorker";
import BeAnExpert from "./BeAnExpert";
import Footer from "./Footer";
import {useState} from "react"

const Main = ({signInUser}) => {

    return (
        <div className="main-container">
            <Narbar signInUser={signInUser}/>
            <Banner/>
            <Body/>
            <FindWorker/>
            <BeAnExpert/>
            <Footer/>
        </div>
    )
}

export default Main
