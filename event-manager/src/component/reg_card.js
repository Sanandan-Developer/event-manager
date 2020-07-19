import React, { setState, useState } from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Modal from 'react-modal'
import { ModalDialog } from 'react-bootstrap';

const Modalstyle ={
    content:{
        bottom:"40%",
        right: "20%",
        left: "20%"
    }
}


Modal.setAppElement('#root')

function Cards (props){
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="card text-white bg-dark mb-3 m-3" style={{width:"18rem"}}>
            <div className="card-header">
                {props.title}<button className="btn btn-primary" data-toggle="modal" onClick={()=>setModalIsOpen(true)} style={{float:"right"}}><i className="fas fa-pen"></i></button>

                <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={Modalstyle}>
                <div className="modal-body">
                <center>
                    <h1 >Create An Event </h1>
                </center>
                <form>
                    <h5>Enter Your Event Name</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="EventName" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <hr/>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" placeholder="Date" ></input>
                    </div>
                    <hr/>
                    <h5>A Small Description</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={()=>setModalIsOpen(false)}>Close</button>
                    <button className="btn btn-primary">Save Changes</button>
                </div>

                </Modal>

            </div>
            <div className="card-body">
                <center>
                    <h5 className="card-title">{props.date}</h5>
                    <p className="card-text">{props.details}</p>
                </center>
            </div>
        </div>
    )
}
     
export default Cards;
