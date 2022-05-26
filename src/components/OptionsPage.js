import React from 'react';
import '../css/OptionsPage.css'
import {Link,useLocation} from 'react-router-dom';


function OptionsPage() 
{
    
    return<>
        <div className="Page">
        <div style={{display:"flex",justifyContent:"space-between", height:"40px",marginTop:"20px",marginLeft:"40px",marginRight:"40px"}}>
            <img src={require("../images/logo.png")}alt="" style={{height:"65px"}} />
            <div style={{display:"flex",flexDirection:"row"}}>
            <p style={{fontSize:"20px",fontWeight:"bold",alignSelf:"center"}} >Reshma </p>
            <img src = {require("../images/user-profile.png")} alt="" style={{height:"50px",width:"50px", alignSelf:"center"}}/>
            </div>
        </div>
        <div style={{margin:"auto", width:"45%"}}>
                <p style={{fontWeight:"bold", fontSize:"40px",width:"fit-content",left:"500%"}} >Hey reshma!</p>
                <div>
                <Link to="/BookARide" className="bookRideBtn">Book a ride</Link>
                <Link to="/OfferARide" className="offerRideBtn">Offer a ride</Link>
                </div>
        </div>
        <img src={require("../images/rideoptionsbg.png")} alt="" style={{height:"60%", zIndex:-1,width:"100vw", marginTop:"11%"}}/>
        </div>
    </>
}

export default OptionsPage