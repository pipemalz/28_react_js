import React from "react";
import moment from "moment";
import './ShowDate.css';

function ShowDate(){
    const [currentDate, setDate] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(()=>setDate(moment().format('MMMM Do YYYY, h:mm:ss a')), 1000);

    return (
        <>
            <p>{currentDate}</p>
        </>
    );
}

export { ShowDate };