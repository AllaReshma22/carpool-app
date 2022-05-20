import React, { Component } from 'react';
import "../css/OfferARide.css";
import logo from "../images/logo.png"
class OfferARide extends Component
{
    render(){
    return<>
    <body>
        <div className='main'>
            <img  className="logo"src={logo} alt="logo"></img>
        <div className='Bookcard'>
        <div style={{display:"flex", flexDirection:"row", marginBottom:"0px"}}>
            <h2>Offer a  Ride</h2>
            <label className="toggle" style={{alignSelf:"center"}}>
                <span class="slider1"></span>
            </label>
            </div>
            <p style={{marginTop:"2px"}} className="tagLine">we get you the matches asap !</p>
            <form className='detailsForm'>
                <label>
                    From
                </label>
                <input type="text" >
                </input>
                <label>To</label>
                <input type="text" ></input>
                <label>Date</label>
                <input type="text" placeholder='xx/mm/yyyy'></input>
                <label>Time</label>
                <div className='timings'>
                <button className="TimeButtons">5am-9am</button>
                <button className="TimeButtons">9am-12pm</button>
                <button className="TimeButtons">12pm-3pm</button>
                <button className="TimeButtons">3pm-6pm</button>
                <button className="TimeButtons">6am-9pm</button>
                </div>
                <br></br>
                <button type='submit' style={{color:"white",backgroundColor:"orange",width:"100px",borderColor:"green"}}>Submit</button>
            </form>
        </div>
        </div>
        </body>
    </>
    }
}
export default OfferARide;