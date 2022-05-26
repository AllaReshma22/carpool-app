import React from "react";

const OfferedRideCard = (props) => {
    return(
        <div className="rideCard flex">
            <h1 className="rideperson">{props.Name}</h1>
            <div className="cardDetails flex">
                <div className="firstPart">
                    <label className="leftlabel">From</label>
                    <h4 className="lefttext" >{props.From}</h4>
                    <label className="leftlabel">Date</label>
                     <h4 className="lefttext" >{props.Date}</h4>
                    <label className="leftlabel">Price</label>
                    <h4 className="lefttext" >{props.Price}&#36;</h4>
                </div>
                <div style={{width:"50%"}}></div>
                <div className="secondPart">
                    <label className="rightlabel">To</label>
                    <h4 className="righttext" >{props.To}</h4>
                   <label className="rightlabel">Time</label>
                   <h4 className="righttext" >{props.Time}</h4>
                    <label className="rightlabel">Seats</label>
                    <h4 className="righttext" >{props.Seats}</h4>
                </div>
            </div>
        </div>
    )
}

export default OfferedRideCard;