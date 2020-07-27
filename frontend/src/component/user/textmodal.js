import React, { Component } from 'react';
import Modal from 'react-modal';

const modalStyle = {
    overlay:{
        backgroundColor:"grey"
    },
    content:{
        top: "30%",
        bottom: "35%",
        right: "30%",
        left: "30%"
    }
}

Modal.setAppElement('#root')        

export default function TextModal(props){
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    var event = props.event
    console.log(event, "chetan")
    return (
        <div>
            <button onClick={()=> setModalIsOpen(true)} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style={{float:"right"}}>
                View Details
            </button>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={()=> setModalIsOpen(false)}>
                <div class="card" style={{width: "100%", height:"100%"}}>
                <div class="card-body">
                <h5 class="card-title">{event.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Event Date:{event.date} </h6>
                    <p class="card-text">{event.details}</p>
                    <a href="#" class="card-link">{event.link}</a>
                </div>
                </div>
            </Modal>
        </div>
    );
}
 