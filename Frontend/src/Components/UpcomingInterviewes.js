import React,{useEffect,useState} from 'react';
import axios from 'axios';



function UpcomingInterviewes()
{

    const [arr,arrset]=useState([]);
    console.log("hbee");
    useEffect(() => {
        async function fetchapi()
        {
            try {
                const data = await axios.get("/allInterviews");
                console.log(data.data)
                // arrset(data.data.data);
                arrset(data.data.data);
                } 
            catch (err) {
            console.log(err);
            }
        }
        fetchapi();
    }, [])
    console.log(arr);
    return (
        <>
        <h4 style={{margin:"auto"}}> Upcoming Interviewes</h4>
        <br></br>
        <table>
        <thead style={{fontSize:"40px"}}>
            <tr>
                <th>Email</th>
                <th>Date & Time</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody style={{fontSize:"30px"}}>
        {arr && arr.map((ele)=>
            <tr>
            <td>{ele.email}</td>
            <td>{ele.date}</td>
            <button>Delete</button>
            </tr>
        )}
        </tbody>
        </table>
        </>
    )
}

export default UpcomingInterviewes;