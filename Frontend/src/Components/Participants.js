import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Participants()
{

    const [arr, arrset] = useState([]);
    useEffect(() => {
        async function fetchapi()
        {
            try {
                const data = await axios.get("/user");
                console.log(data.data);
                arrset(data.data.data);
                } 
            catch (err) {
            console.log(err);
            }
        }
        fetchapi();
    }, [])
    return (
        <>
        <h2 style={{margin:"auto"}}>Participants List</h2>
        { arr && arr?.map((ele, key) =>
            <div>
                {ele.name}
            </div>
            )}
        </>
    )
}

export default Participants;