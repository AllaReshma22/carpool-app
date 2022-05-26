import React from "react";
import img from "../images/user-profile.jpg";
import {Link} from 'react-router-dom';
import "../css/OfferARide.css"

const HomeComponent = () => {

    function ProfileViewer(event){
        var ele = document.getElementById("profileSlides").style.display
        if(ele === "" || ele === "none"){
            document.getElementById("profileSlides").style.display = "flex"
        }
        else{
            document.getElementById("profileSlides").style.display = "none"
        }
    }


    return(
        <div className="profile">
            <div className="flex">
                <h3 className="customerName">reshma</h3>
                <img src={img} alt="Profile" id="profile" onClick={() => ProfileViewer()}></img>
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

export default HomeComponent;