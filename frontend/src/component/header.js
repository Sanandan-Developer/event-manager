import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css'



class Header extends Component {

    hamerbug = () => {
        return (
            <div>
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </div>
        )
    }
    render() { 
        
        return ( 
            <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <Link to="/"><a className="navbar-brand" href="#">
                <div className="left_area">
                    <h3>Event <span>Organiser</span></h3>
                </div>
            </a></Link>

                
            
                    <form class="form-inline my-2 my-lg-0 p-2">
                    <Link to="/register"><button className="btn btn-outline-info my-2 my-sm-0 m-2" type="submit">Register</button></Link>
                    <Link to="/login"><button className="btn btn-outline-info my-2 my-sm-0 m-2" type="submit">Login</button></Link>
                    </form>
                

            </div>
         );
    }
}
 
export default Header;