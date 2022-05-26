import React from "react";

const OfferedRideCard = (props) => {
    return(
        <div className="rideCard flex">
            <h1 className="rideperson">{props.Name}</h1>
            <div className="cardDetails flex">
                <div className="firstPart">
                    <label>From</label><br/>
                    {props.From}<br/><br/>
                    <label>Date</label><br/>
                    <label id="date">{props.Date}</label><br/><br/>
                    <label>Price</label><br/>
                    <label id="price">{props.Price} &#36; </label><br/>
                </div>
                <div className="secondPart">
                    <label>To</label><br/>
                    <label id="to">{props.To}</label><br/><br/>
                   <label>Time</label><br/>
                    <label id="time">{props.Time}</label><br/><br/>
                    <label>Seats</label><br/>
                    <label id="seats">{props.Seats}</label><br/>
                </div>
            </div>
        </div>
    )
}

export default OfferedRideCard;