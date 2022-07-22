import "../css/BookARide.css";
import HomeComponent from "../components/HomeComponent";
import ProfileComponent from "../components/ProfileComponent";
import RideCard from "../components/RideCard";
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from "react";
function Activator(id,selectedTime){
    var ele = document.getElementById(id).childNodes
    for(var i=0; i<ele.length; i++){
        if(ele[i].value === selectedTime){
            ele[i].style.color = "white"
            ele[i].style.backgroundColor = "blueViolet"
        }
        else{
            ele[i].style.color = "blueViolet"
            ele[i].style.backgroundColor = "white"
        }
    }
    
}
const NewRide = () => {
    const source = React.useRef()
    const destination = React.useRef()
    var time = ""
    const date = React.useRef()
    const [rides, SetRides] = useState([])
    const ActiveTime = () => {
        var ele = document.getElementById("timeSlots").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="blueViolet"){
                time=ele[i].value
            }
        }
    }

    const handleSubmit=()=>
    {
        ActiveTime();
        axios(
            {
            method:'post',
            url:'https://localhost:44348/api/Rides/findride',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Acces-Control-Allow-Origin": "*"
              },
            data:{
                "Source":source.current.value,
                "Destination":destination.current.value,
                "BookingDate":date.current.value,
                "TimeSlot":time,
            }  
        }).then(function (response){
            if(response.data != null){
                SetRides(response.data)
              }
              else{
                  window.alert("something went wrong")
        }
    
            }
        )
        document.getElementById("offeredrides1").style.display="inline";
    
    }
      
    
        

    return(
        <div className="book flex">
                    <HomeComponent/>
                    <ProfileComponent/>
                    <div className="newRide">
                    <div style={{display:"flex",flexDirection:"row", marginBottom:"0px"}}>
                            <h2>Book a  Ride</h2>
                         </div>
                          <h3 className='tag' >we get you the matches asap !</h3>
                          <Link to="/OfferARide"><span class="slider"></span></Link>
                        <form>
                            <label>From</label><br/>
                            <input type="text" id="from" placeholder="Delhi" ref={source}/><br/>
                            <label>To</label><br/>
                            <input type="text" id="to"  placeholder="Hyderabad" ref={destination}/><br/>
                            <label>Date</label><br/>
                            <input type="date" id="date" placeholder="when is it..." ref={date}/><br/>
                            <label>Time</label><br/>
                            <div className='="flex'>
                            <div id="timeSlots" >
                                <button type="button" value={"5am-9am"} onClick={() => Activator("timeSlots","5am-9am")}>5am-9am</button>
                                <button type="button" value={"9am-12pm"} onClick={() => Activator("timeSlots","9am-12pm")}>9am-12pm</button>
                                <button type="button" value={"12pm-3pm"} onClick={() => Activator("timeSlots","12pm-3pm")}>12pm-3pm</button>
                                <button type="button" value={"3pm-6pm"} onClick={() => Activator("timeSlots","3pm-6pm")}>3pm-6pm</button>
                                <button type="button" value={"6pm-9pm"} onClick={() => Activator("timeSlots","6pm-9pm")}>6pm-9pm</button>
                            </div>
                            <div>
                             <button type="button"style={{ marginleft:"45%",color:"white",backgroundColor:"orange",width:"100px",borderColor:"green"}} className="submitbutton" onClick={handleSubmit}>Submit</button>
                             </div>
                             </div>
                </form>
            </div>
            <div className="offeredrides1" id="offeredrides1">
                <h1 className='yourmatch'>Your Matches</h1>
                <div style={{display:"flex",flexdirection:'row'}}>
    
          {
            rides.map(ride => (
                <RideCard Name={ride.Name} From={ride.From} 
                To={ride.To} Date={ride.Date.toString().slice(0,10)}
                 Time={ride.Time} Price={ride.Price}
                 Seats={ride.Seats}/>
            ))
          }
          </div>
        </div>
            </div>
    )
}

export default NewRide;