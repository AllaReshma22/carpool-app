import React, { Component } from 'react';
import "../css/BookARide.css";
import HomeComponent from "../components/HomeComponent";
import ProfileComponent from "../components/ProfileComponent";
import RideCard from "../components/RideCard";
import {Link} from 'react-router-dom';
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
const TimeMapper =  {"5am-9am":1,"9am-12pm":2,"12pm-3pm":3,"3pm-6pm":4,"6pm-9pm":5};
class BookARide extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Source:'',
            Destination:'',
            Time:'',
            Date:'',
            
        }
        this.Source = this.Source.bind(this);
        this.Destination = this.Destination.bind(this);
        this.Date = this.Date.bind(this);
        
    }
    Source(event){
        this.setState({ Source : event.target.value })
    }
    Destination(event){
        this.setState({ Destination : event.target.value })
    }
    Date(event){
        this.setState({ Date : event.target.value })
    }
    ActiveTime = () => {
        var ele = document.getElementById("timeSlots").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="white"){
                this.setState({ Time : TimeMapper[ele[i].value] })
            }
        }
    }
  
    handleSubmit=(e)=>
{
    this.ActiveTime()
    e.preventDefault();
   this.props.BookedRides.push({"Name":"demo",'From':this.state.Source,'To':this.state.Destination,'Date':this.state.Date,'Time':"5am-9am"})
    console.log(this.state.Source,this.state.Destination,this.state.Date,this.state.Time);
    document.getElementById("offeredrides1").style.display="inline";
}
  

    render(){
    return<>
    <body>
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
                        <input type="text" id="from" onChange={this.Source}/><br/>
                        <label>To</label><br/>
                        <input type="text" id="to" onChange={this.Destination}/><br/>
                        <label>Date</label><br/>
                        <input type="date" id="date" onChange={this.Date}/><br/>
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
                         <button type="button"style={{ marginleft:"45%",color:"white",backgroundColor:"orange",width:"100px",borderColor:"green"}} className="submitbutton" onClick={this.handleSubmit}>Submit</button>
                         </div>
                         </div>
            </form>
        </div>
        <div className="offeredrides1" id="offeredrides1">
            <h1 className='yourmatch'>Your Matches</h1>
            <div style={{display:"flex",flexdirection:'row'}}>

      {
        this.props.OfferedRides.map(ride => (
            <RideCard Name={ride.Name} From={ride.From} 
            To={ride.To} Date={ride.Date.toString().slice(0,10)}
             Time={ride.Time} Price={ride.Price}
             Seats={ride.Seats}/>
        ))
      }
      </div>
    </div>
        </div>
        </body>
    </>
}

}
export default BookARide;