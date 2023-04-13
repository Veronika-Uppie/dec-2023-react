import React, {useState} from 'react';
import Flight from "../Flight/Flight";

const Flights = () => {
    let [flights, setFlights] = useState([]);


    fetch('https://api.spacexdata.com/v3/launches')
        .then(value => value.json())
        .then(allFlights => {
            setFlights(allFlights);
        })


    return(
        <>

            {
                flights.map(value => <Flight value={value} key={value.flight_number}/>)
            }

        </>


    )};

export default Flights;



