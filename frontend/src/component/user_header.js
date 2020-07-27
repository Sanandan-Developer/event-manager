import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css'



class UserHeader extends Component {

    hamerbug = () => {
        return (
            <div>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </div>
        )
    }
    render() { 
        
        return ( 
            <div className="container-fullwidth">
            <div className="navbar navbar-dark bg-dark">
                <div>
                <button className="sidebar-open-btn" onClick={this.props.open}><i className="fa fa-bars" aria-hidden="true"></i></button>
                <Link to="/"><a className="navbar-brand" href="#">
                    <div className="left_area">
                        <h3>Event <span>Organiser</span></h3>
                    </div>
                </a></Link>
                </div>
                <div >
                <form className="form-inline my-2 my-lg-0 p-2">
                    <Link to="/login"><button className="btn btn-outline-info my-2 my-sm-0 m-2" type="submit">Logout</button></Link>
                </form>
                </div>
            </div>
            </div>
         );
    }
}
 
export default UserHeader;