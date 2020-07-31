import React, { Component, useState, useEffect, useReducer } from 'react';
import TextModal from './textmodal.js'
import axios from 'axios'
import data from './details'

function Events(){

    const [UserEvents, setUserEvent] = useState([]);


    const fetchdata = async() => {
        const data1 = await axios.get("/User")
        //console.log(data1.data)
        setUserEvent(data1.data)
    }

    useEffect(() => {
        fetchdata();
            return ()=>{
                //
            }
        }, [])
    
        const user_events = UserEvents
        const events_details = []

        for( const [index, values] of user_events.entries()){
            events_details.push(
                <div class="card text-white bg-dark mb-3 m-2" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title" style={{fontWeight:"bold", textTransform:"uppercase"}}>{values.title}</h5>
                    <p class="card-text">{values.description}</p>
                    <TextModal event={values}/>
                </div>
                </div>
            )
        } 
    
        
    
        
        return (  
        <div>

            <div style={{margin:"5%"}}>
                <h1 style={{fontWeight:"bold",textTransform:"uppercase", marginLeft:"2%", marginBottom:"2rem"}}>Events Registered In</h1>
                <div class="d-flex justify-content-center flex-wrap" style={{backgroundColor:"#b0dfff", padding:"4rem", borderRadius:"2rem"}}>
                    {events_details}
                </div>
            </div>
            <center style={{marginTop:"10%", marginBottom:"5%"}}>
            <button type="button" class="btn btn-primary btn-lg">More Events</button> 
            </center>
        </div>
          );
    
}
 
export default Events;