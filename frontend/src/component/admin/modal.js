import React from 'react';
import Modal from 'react-modal';


/*
showModal  = () => {
    console.log(this)
    this.setState({ show: true });
}
        

hideModal =  () => {
    this.setState({ show: false });
}
*/
const modalStyle = {
    overlay:{
        backgroundColor:"grey"
    },
    content:{
        top: "30%",
        bottom: "20%",
        right: "30%",
        left: "30%"
    }
}

Modal.setAppElement('#root')        

export default function ModalContent(){
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    return (
        <form type="submit">
            <button onClick={()=> setModalIsOpen(true)} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style={{float:"right"}}>
                <i class="fas fa-pen"></i>
            </button>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={()=> setModalIsOpen(false)}>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Event Name</label>
                <input type="name" class="form-control" id="name" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="Email" class="form-control" id="email" aria-describedby="emailHelp"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary m-2">Save Changes</button>
            <button type="button" class="btn btn-dark m-2" onClick={()=> setModalIsOpen(false)}>Close</button>
            </form>
            </Modal>
        </form>
    );
}