import React,{useEffect,useState} from 'react';
import axios from 'axios';


function Schedule()
{
    const [dat,datset]=useState([{'name':'','email':''}]);
    console.log("hbee");
    useEffect(() => {
        async function fetchapi()
        {
            try {
                const data = await axios.get("/user");
                console.log(data.data)
                // arrset(data.data.data);
                datset(data.data.data);
                } 
            catch (err) {
            console.log(err);
            }
        }
        fetchapi();
    }, [])
    console.log(dat);
    const [user,setUser]=useState({
        email:"",starttime:"",endtime:"",date:''
    });

    let name,value;
    const handleInput=(e)=>
    {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }

    return(
        <>
            <h4 style={{margin:"auto"}}>Schedule An Interview</h4>
            <br></br>
            <div style={{margin:"auto"}}>
            <form method='POST'>
                <label style={{fontSize:"30px"}}>Choose Date:</label>
                <input type="date" name="date" id="date" value={user.date} onChange={handleInput}></input>
                <label style={{fontSize:"30px"}}>Start time:</label>
                <input type="time" name="starttime" id="starttime" value={user.starttime} onChange={handleInput}></input>
                <label style={{fontSize:"30px"}}>End time:</label>
                <input type="time" name="endtime" id="endtime" value={user.endtime} onChange={handleInput}></input>
                <label style={{fontSize:"30px"}}>Select Canditates</label>
                <select name="email" id="email" value={user.email} onChange={handleInput} placeholder='Select' required>
                    {dat && dat.map((ele)=>
                    <option>{ele.email}</option>
                    )}
                </select>
                <button>Schedule Interview</button>
            </form>
            </div>
        </>


    )
}

export default Schedule




