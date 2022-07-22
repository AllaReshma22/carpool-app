import React from "react";
import img from "../images/user-profile.jpg";
import {Link} from 'react-router-dom';
import "../css/OfferARide.css"
import { Component } from "react";

class ProfileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: window.localStorage.getItem('email'),
            password:'',
            id: window.localStorage.getItem('id')
        };
    }

     ProfileViewer=(e)=>{
        var ele = document.getElementById("profileSlides").style.display
        if(ele === "" || ele === "none"){
            document.getElementById("profileSlides").style.display = "flex"
        }
        else{
            document.getElementById("profileSlides").style.display = "none"
        }
    }

render(){
    return(
        <div className="profile">
            <div className="flex">
                <h3 className="customerName">{ this.state.email.substring(0, this.state.email.indexOf('@')) || "test"}</h3>
                <img src={img} alt="Profile" id="profile" onClick={() => this.ProfileViewer()}></img>
            </div>
            <div className="profileSlides" id="profileSlides">
                <ul className="profileMenu">
                    <li className="profileMenuItem">Profile</li>
                    <Link to="/AllRides"><li className="profileMenuItem">My Rides</li></Link>
                    <Link to="/"><li className="profileMenuItem">Logout</li></Link>
                </ul>
            </div>
        </div>
    )
}
}

export default ProfileComponent;