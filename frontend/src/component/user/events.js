import React, { Component, useState, useEffect } from 'react';
import TextModal from './textmodal.js'
import axios from 'axios'
import data from './details'

function Events(){

    const [Events, setEvents] = useState([]);

    useEffect(()=>{
        const fetchdata = async() => {
            const {data} = await axios.get("/User")
            setEvents(data)
        }
        fetchdata()
        return ()=>{

        }
    }, [])
    
    {/*
        for( var [index, value] of elements.entries()){
            items.push(
                <div class="card text-white bg-dark mb-3" id={index} style={{width:"18em", margin:"10px"}}>
                    <div class="card-header">
                        Header
                        <ModalContent />
                    </div>
                    <div class="card-body">
                        <img class="card-img" />
                        <h5 class="card-title">Dark card title</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary">Publish</button>
                    </div>
                </div>
            )
        }
    
    */}
        const events = data.Events
        

        const events_details = []

        for( const [index, values] of events.entries()){
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

            <div style={{marginTop:"5%"}}>
                <h1 style={{fontWeight:"bold", marginLeft:"2%"}}>Events Registered In</h1>
                <div class="d-flex justify-content-center flex-wrap">
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