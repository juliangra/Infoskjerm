import React, { useEffect, useState } from "react";
import createEnturService from '@entur/sdk'

const service = createEnturService({
    clientName: 'grande-infoskjerm'
});

const Bikes = () => {

    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition({
            latitude: 63.430315,
            longitude: 10.366376
        }, 500)
        .then(data => setBikeStations(data));
    },[]);


    return (
        <div className="bikes">
            {bikeStations.map((station) => (
            <Station key={station.id} station={station} />
            ))}
        </div>
    );
}



export default Bikes;


const Station = (props) => {

    const {name, bikesAvailable, spacesAvailable} = props.station;

    return(
        <div className="Station">
            <h2>Bysykler 2.0</h2>
            <h3>{name}</h3>
            <p>Ledige sykler: {bikesAvailable}</p>
            <p>Ledige plasser: {spacesAvailable}</p>
        </div>
        
    )
}