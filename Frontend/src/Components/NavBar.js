import React from 'react'
import { Link } from "react-router-dom";
function Navbar()
{
return(
    <div className="container" style={{margin:"100px"}}>
        <button><Link to="/allParticipants">Participants</Link></button>
        <button><Link to="/allInterviewes">Upcoming Interviewes</Link></button>
        <button><Link to="/Schedule">Schedule new Interview</Link></button>
    </div>
)
}

export default Navbar