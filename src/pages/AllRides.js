import React,{Component} from "react";
import HomeComponent from "../components/HomeComponent";
import "../css/AllRides.css"
import ProfileComponent from "../components/ProfileComponent"
import RideCard from "../components/RideCard";
class AllRides extends Component{
    renderBookedRides(){
    if (this.props.BookedRides.length < 1) {
      return (
        <div className="not-found">
          <h1> No Rides found, please check back later </h1>
        </div>
      );
    }
    return (<div className="row rides">
      {
        this.props.BookedRides.map(ride => (
            <RideCard Name={ride.Name} From={ride.From} 
            To={ride.To} Date={ride.Date.toString().slice(0,10)}
             Time={ride.Time} Price={ride.Price}
             Seats="01"/>
        ))
      }
    </div>);
  }
  renderOfferedRides(){
    if (this.props.OfferedRides.length < 1) {
      return (
        <div className="not-found">
          <h1> No Rides found, please check back later </h1>
        </div>
      );
    }
    return (<div className="row offeredrides">
      {
        this.props.OfferedRides.map(ride => (
            <RideCard Name={ride.Name} From={ride.From} 
            To={ride.To} Date={ride.Date.toString().slice(0,10)}
             Time={ride.Time} Price={ride.Price}
             Seats={ride.Seats}/>
        ))
      }
    </div>);
  }
    render(){
    return(
        <div>
            <HomeComponent/>
            <ProfileComponent/>
            <div className=" application flex">
               <div className="BookedPart">
               <button className="BookedRidesButton">Booked Rides</button>
                {this.renderBookedRides()}
               
               </div>
                <div className="OfferedPart">
                <button className="OfferedRidesButton">Offered Rides</button>
                {this.renderOfferedRides()}
                
                </div>
                
            </div>
        </div>
    )
}
}
export default AllRides;
