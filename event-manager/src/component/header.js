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
            <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link to="/"><a className="navbar-brand" href="#">
                <div className="left_area">
                    <h3>Event <span>Organiser</span></h3>
                </div>
            </a></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={this.hamerbug}>
                        {/* Hamerbug */}
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link m-2" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link m-2">Details<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link m-2" href="#">Contacts<span className="sr-only">(current)</span></a>
                    </li>
                    
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                    <Link to="/register"><button className="btn btn-outline-info my-2 my-sm-0 m-2" type="submit">Register</button></Link>
                    <Link to="/login"><button className="btn btn-outline-info my-2 my-sm-0 m-2" type="submit">Login</button></Link>
                    </form>
                </div>

            </div>
         );
    }
}
 
export default Header;