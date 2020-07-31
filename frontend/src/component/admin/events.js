import React, { Component, useState, setState } from 'react';
import ModalContent from './modal.js'
import TextModal from './textmodal.js'
import data from './details.js'

function Events() {
        var initialelement = []
        data.Events.forEach(element => {
            initialelement.push(element.title)
        })
        const [elements, setelements] = useState(initialelement)
        var items = []
        for(var [index, value] of elements.entries()){
            items.push(
                <div class="card text-white bg-dark mb-3" id={index} style={{width:"18rem", margin:"10px"}}>
                    <div class="card-header">
                    <h3 style={{fontWeight:"bold", textTransform:"uppercase", fontSize:"1.2rem"}}>{value}</h3>
                        <ModalContent />
                    </div>
                    <div class="card-body">
                        <img class="card-img" />
                        <h5 class="card-title" style={{fontWeight:"bold", fontSize:"1.2vw"}}>{}</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-primary">Publish</button>
                    </div>
                </div>
            )
        }


        const addItems = () =>{
            setelements([ ...elements, "NEW"])
        }

        return (  
        <div>
            <div style={{margin:"2rem"}}>
                <h1 style={{fontWeight:"bold",textTransform:"uppercase" ,marginLeft:"2%", marginBottom:"3rem", cursor:"pointer"}}>Events Created</h1>
                <div class="d-flex justify-content-center flex-wrap" style={{backgroundColor:"#b0dfff", padding:"4rem", borderRadius:"2rem"}}>
                    {items}
                </div>
                <center style={{margin:"4rem"}}>
                    <button type="button" class="btn btn-primary btn-lg" onClick={() => addItems() }>Create New Event</button>
                </center>
            </div>
        </div>
          );
    
}
 
export default Events;