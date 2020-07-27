import React, { Component } from 'react';
import { useState } from 'react';
import './user-css/dashboard.css'
import img8 from '../imgs/img8.png'
import Modal from 'react-modal'
import MyChart from './charts.js'

Modal.setAppElement('#root')

function Dashboard(){
    const state = {
        show: false,
        showModal : () => {
            console.log(this)
            this.setState({ show: true });
        },
        hideModal :  () => {
            this.setState({ show: false });
        }
    }
    


        return (
            <div>
                {/* Intro Block */}
                <div class="d-flex flex-row bd-highlight mb-2">
                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src = {img8} alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title"><span>John Doe</span></h4>
                                <p class="card-text">@gmail.com</p>
                                <button href="#" onClick={state.showModal} class="btn btn-primary">Edit</button>
                                <Modal isOpen={state.show} onRequestClose={state.hideModal} style={{
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
                    <div class="col-4">
                        <MyChart />
                        <div style={{padding:"3rem"}}>
                            
                        </div>
                    </div>
                    

                    
                    {/* Block Ends */}

                    {/* Graph */}
                    {/*
                    <div class="col-8" style={{paddingTop:"4%"}}>
                        <h1>Work Done</h1>
                    <Line options={{responsive:"true", width: 600, height: 500}}>
                        data = {state.data}
                    </Line>
                    </div>
                    */}
                </div>

            </div>
        );

}

export default Dashboard;