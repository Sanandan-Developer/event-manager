import React, { Component } from 'react';
import ModalContent from './modal.js'
import TextModal from './textmodal.js'
import data from './details.js'

class Events extends Component {
    render() { 
        console.log(data.Events)
        const elements = data.Events

        var items = []

        for( var [index, value] of elements.entries()){
            items.push(
                <div class="card text-white bg-dark mb-3" id={index} style={{width:"18em", margin:"10px"}}>
                    <div class="card-header">
                    <h3 style={{fontWeight:"bold", textTransform:"uppercase", fontSize:"1.2vw"}}>{value.title}</h3>
                        <ModalContent />
                    </div>
                    <div class="card-body">
                        <img class="card-img" />
                        <h5 class="card-title" style={{fontWeight:"bold", fontSize:"1.2vw"}}>{value.details}</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary">Publish</button>
                    </div>
                </div>
            )
        }
        

        return (  
        <div>
            <div>
            <h1 style={{fontWeight:"bold", marginLeft:"2%"}}>Events Created</h1>
                <div class="d-flex justify-content-center flex-wrap">
                    {items}
                </div>
                <center>
                    <button type="button" class="btn btn-primary btn-lg" onClick={()=> elements.push('five')}>Create New Event</button>
                </center>
            </div>
        </div>
          );
    }
}
 
export default Events;