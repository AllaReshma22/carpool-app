import React from "react";
import RideCard from "./RideCard";

const Matches = (props) => {
    return(
        <div className="matches flex">
            <h2>Your Matches</h2>
            <div className="offeredRides flex" id="offeredRides">
            {props.OfferedRides.length > 0 && (
                <ul className="ridesContainer grid">
                {props.OfferedRides.map(ride => (
                    <RideCard ProfileName={props.OfferedRides.Name} Source={props.OfferedRides.From} Destination={props.OfferedRides.To} Date={props.OfferedRides.Date.toString().slice(0,10)} Time={props.OfferedRides.Time} Price={props.OfferedRides.Price} SeatsAvailable={props.OfferedRides.SeatsAvailable}/>
                ))}
                </ul>
            )}
            </div>
        </div>
    )
}

export default Matches;
