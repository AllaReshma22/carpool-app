import React, { Component } from 'react';
import '../css/OptionsPage.css'
import {Link} from 'react-router-dom';
import HomeComponent from "../components/HomeComponent";
import ProfileComponent from "../components/ProfileComponent";


class OptionsPage extends Component
{
    constructor(props){
        super(props);
        this.state = {
            email: window.localStorage.getItem('email'),
            password:'',
            id: window.localStorage.getItem('id')
        };
    }

    handleLogout = event =>{
        window.localStorage.clear();
    }
    render(){  
    return(
        
        <div>
               <HomeComponent/>
                <ProfileComponent/>
            
       
            <div style={{margin:"auto", width:"45%"}}>
                <p style={{fontWeight:"bold", fontSize:"40px",width:"fit-content",left:"500%"}} >Hey { this.state.email.substring(0, this.state.email.indexOf('@')) || "test"}!</p>
                <div>
                <Link to="/BookARide" className="bookRideBtn">Book a ride</Link>
                <Link to="/OfferARide" className="offerRideBtn">Offer a ride</Link>
                </div>
            </div>
        <img src={require("../images/rideoptionsbg.png")} alt="" style={{height:"60%", zIndex:-1,width:"100vw", marginTop:"11%"}}/>
        </div>
    )
    }
}

export default OptionsPage