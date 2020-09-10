import React, { useEffect, useState } from "react";

const BySykkel = () => {

    const [sykkel, setSykkel] = useState({});

    useEffect(() => {
        fetch("https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json")
        .then(response => response.json())
        .then(json => setSykkel(json.data.stations[48]));
    }, []);

    return(
        <div className="BySykkel">
            <h2>Bysykler</h2>
            <h3>Skansen</h3>
            <p>Ledige sykler: {sykkel.num_bikes_available}</p>
            <p>Ledige plasser: {sykkel.num_docks_available}</p>
        </div>
    )

}

export default BySykkel;