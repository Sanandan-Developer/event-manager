import React, { Component } from 'react';
import ModalContent from './modal.js'
import { black } from 'material-ui/styles/colors';
import TextModal from './textmodal.js'

class Events extends Component {
    render() { 

        var elements = ['one', 'two', 'three', 'four']

        var items = []

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
        
        const events = ['first', 'second', 'third', 'fourth']

        const events_details = []
        
        for( const [index, values] of events.entries()){
            events_details.push(
                <div class="card text-white bg-dark mb-3 m-2" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title" style={{fontWeight:"bold", textTransform:"uppercase"}}>{values}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <TextModal />
                </div>
                </div>
            )
        }
        

        
        return (  
        <div>
            <div >
            <h1 style={{fontWeight:"bold", marginLeft:"23%"}}>Events Created</h1>
                <div class="row">
                    {items}
                </div>
                <center>
                    <button type="button" class="btn btn-primary btn-lg" onClick={()=> elements.push('five')}>Create New Event</button>
                </center>
            </div>

            <div style={{marginTop:"5%"}}>
                <h1 style={{fontWeight:"bold", marginLeft:"23%"}}>Events Registered In</h1>
                <div class="row">
                    {events_details}
                </div>
            </div>
            <center style={{marginTop:"10%", marginBottom:"5%"}}>
            <button type="button" class="btn btn-primary btn-lg">More Events</button> 
            </center>
        </div>
          );
    }
}
 
export default Events;