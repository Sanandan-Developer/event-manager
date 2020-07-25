import React, { Component } from 'react';
import './css/sidebar.css'
import img8 from './imgs/img8.png'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import {Link} from 'react-router-dom'
import Dashboard from './user/dashboard.js'
import Events from './user/events.js'
import Terms from './user/terms.js'




class User1 extends Component {

    state = {
        count: 0
    }

    renderPage = () => {
        console.log(this.state.count)
        if (this.state.count === 0){
            return <Dashboard />
        }
        if (this.state.count === 1){
            return <Events />
        }
        if (this.state.count === 2){
            return <Terms />
        }

    }
    
    render() { 
        return (
            <div  className="sidebar-main" >
                {/* HeaderIn Block */}
                

                {/*Block Ends */}
                <div className="sidebar">
                        <center className="left_area_sidebar">
                            <h3>Event</h3>
                            <h3><span>Organiser</span></h3>
                        </center>  
                    <center>
                        <img src={img8} className="profile-image"  alt=""/>
                        <h4>John Doe</h4>
                    </center>
                    <div className="sidebar-options">
                    <a href="#" onClick={() => this.state.count = 0}><i className="fas fa-desktop" aria-hidden="true"></i><span>DashBoard</span></a>
                    <a href="#" onClick={() => this.state.count = 1}><i className="fas fa-info-circle" aria-hidden="true"></i><span>Events</span></a>
                    {/*<a href="#" onClick={() => this.state.count = 2}><i className="fas fa-th" aria-hidden="true"></i><span>Forms</span></a>*/}
                    <a href="#" onClick={() => this.state.count = 2}><i className="fas fa-sliders-h" aria-hidden="true"></i><span>Terms And Conditions</span></a>
                    <Link to="/"><i class="fas fa-sign-out-alt"></i><span>Logout</span></Link>
                    </div>
        
                </div>
                
                {this.renderPage()}
            </div>
        );
    }
}
 
export default User1;