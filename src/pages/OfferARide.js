import React, { Component } from 'react';
import "../css/OfferARide.css";
import HomeComponent from "../components/HomeComponent";
import ProfileComponent from "../components/ProfileComponent";
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
const TimeMapper =  {"5am-9am":1,"9am-12pm":2,"12pm-3pm":3,"3pm-6pm":4,"6pm-9pm":5}
const SeatMapper = {"1":1,"2":2,"3":3}
var SeatsAvailable=5;

class OfferARide extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            Source:'',
            Destination:'',
            Time:0,
            Date:'',
            Price:0
        }
        this.Source = this.Source.bind(this);
        this.Destination = this.Destination.bind(this);
        this.Date = this.Date.bind(this);
        this.Price = this.Price.bind(this);
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
    Price(event){
        this.setState({ Price : parseInt(event.target.value) })
    }
    ActiveTime = () => {
        var ele = document.getElementById("timeSlots").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="white"){
                this.setState({ Time : TimeMapper[ele[i].value] })
            }
        }
    }

    ActiveSeats = () => {
        var ele = document.getElementById("seats").childNodes
        for(var i=0;i<ele.length;i++){
            if(ele[i].style.color==="white"){
                SeatsAvailable = SeatMapper[ele[i].value]
            }
        }
    }

    handleNext = () => {
        this.ActiveTime()
        document.getElementById("newRideDetails").style.display="flex";
    }
    handleSubmit=(e)=>{
       this.ActiveSeats();
       this.props.OfferedRides.push({"Name":"demo","From":this.state.Source,"To":this.state.Destination,"Date":this.state.Date,"Price":this.state.Price,"Seats":SeatsAvailable,"Time":this.state.Time})
        console.log(this.state.Source,this.state.Destination,this.state.Date,this.state.Price,this.state.Time,SeatsAvailable)
    }
    
    render(){
        return(
            <div className="book flex">
                <HomeComponent/>
                <ProfileComponent/>
                <div className="newRide">
                <div style={{display:"flex", flexDirection:"row", marginBottom:"0px"}}>
                        <h2>Offer a  Ride</h2>
                     </div>
                     <h3 className='tag' >we get you the matches asap !</h3>
                      <Link to="/BookARide"><span class="slider1"></span></Link>
                    <form>
                        <label>From</label><br/>
                        <input type="text" id="from" onChange={this.Source}/><br/>
                        <label>To</label><br/>
                        <input type="text" id="to" onChange={this.Destination}/><br/>
                        <label>Date</label><br/>
                        <input type="date" id="date" onChange={this.Date}/><br/>
                        <label>Time</label><br/>
                        <div id="timeSlots">
                            <button type="button" value={"5am-9am"} onClick={() => Activator("timeSlots","5am-9am")}>5am-9am</button>
                            <button type="button" value={"9am-12pm"} onClick={() => Activator("timeSlots","9am-12pm")}>9am-12pm</button>
                            <button type="button" value={"12pm-3pm"} onClick={() => Activator("timeSlots","12pm-3pm")}>12pm-3pm</button>
                            <button type="button" value={"3pm-6pm"} onClick={() => Activator("timeSlots","3pm-6pm")}>3pm-6pm</button>
                            <button type="button" value={"6pm-9pm"} onClick={() => Activator("timeSlots","6pm-9pm")}>6pm-9pm</button>
                        </div>
                        <button type="button" id="cardNext" onClick={this.handleNext}>Next &gt;&gt;</button>
                    </form>
                </div>
                <div className="newRideDetails" id="newRideDetails">
                    <h1 id="rideTitle">Offer a Ride</h1> 
                    we get you the matches asap!
                    <form>
                        <div className="flex">
                            <div>
                                Seats Available<br/>
                                <div id="seats">
                                    <button type="button" value={"1"} onClick={() => Activator("seats","1")}>1</button>
                                    <button type="button" value={"2"} onClick={() => Activator("seats","2")}>2</button>
                                    <button type="button" value={"3"} onClick={() => Activator("seats","3")}>3</button>
                                </div>
                            </div>
                            <div className="priceContainer">
                                Price<br/>
                                <input type="number" id="number" onChange={this.Price}/>
                            </div>
                        </div>
                        <button type="button"style={{ marginleft:"45%",color:"white",backgroundColor:"orange",width:"100px",borderColor:"green"}} className="submitbutton" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}
export default OfferARide;