import React, { Component } from 'react';
import { useState } from 'react';
import './user-css/dashboard.css'
import img8 from '../imgs/img8.png'
import Modal from 'react-modal'
import {Line} from 'react-chartjs-2'
import ModalContent from './modal.js'
import TextModal from './textmodal.js'


Modal.setAppElement('#root')

class Dashboard extends Component {
    state = {
        show: false,
        showModal : () => {
            console.log(this)
            this.setState({ show: true });
        },
        hideModal :  () => {
            this.setState({ show: false });
        }
    }
    
    render() {
        {/*
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

    */}


        return (
            <div>
                {/* Intro Block */}
                <div class="row align-items-center">
                    <div class="col">
                    <div class="card" style={{width:"400px"}}>
                        <img class="card-img-top" src = {img8} alt="Card image"/>
                        <div class="card-body">
                            <h4 class="card-title">John Doe</h4>
                            <p class="card-text">@gmail.com</p>
                            <button href="#" onClick={this.state.showModal} class="btn btn-primary">Edit</button>
                            <Modal isOpen={this.state.show} onRequestClose={this.state.hideModal} style={{
                                overlay:{
                                    backgroundColor:"grey"
                                },
                                content:{
                                    top: "30%",
                                    bottom: "30%",
                                    right: "30%",
                                    left: "30%"
                                }
                            }}>
                                <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                                </div>
                                <button type="submit" class="btn btn-primary m-2">Save</button>
                                <button type="button" class="btn btn-dark m-2">Close</button>
                                </form>
                            </Modal>
                        </div>
                    </div>
                </div>
                    
                    {/* Block Ends */}

                </div>
                

            </div>
        );
    }
}

export default Dashboard;