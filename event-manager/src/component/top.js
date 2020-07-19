import React, { Component } from 'react';
import img1 from './imgs/img1.jpg'
import img3 from './imgs/img3.jpg'
import img2 from './imgs/img2.jpg'


class TopSlide extends Component {
    
    // constructor() {
    //     super()
    //     this. forward = this.forward.bind(this)
    //     this.backward = this.backward.bind(this)
    //     this.activity = this.activity.bind(this)
    // } 

    state = {
        active: 0
    }

    constructor() {
        super()
        setInterval(this.forward, 3000);
    }

// this can also be bounded using the this function
    forward = () => {
        this.setState({active: (this.state.active+1)%3})
    }

    backward = () => {
        this.setState({active: (this.state.active-1)>0?(this.state.active-1)%3:(this.state.active+2)%3})        
    }

    activity = (cond) => {
        if(cond){
            return "carousel-item active"
        }else{
            return "carousel-item"
        }
    }

    act1 = () => {
        if(this.state.active === 0)
            return true
        else
            return false
    }

    act2 = () => {
        if(this.state.active === 1)
            return true
        else
            return false
    }

    act3 = () => {
        if(this.state.active ===   2)
            return true
        else 
            return false
    }

    render() { 
        return ( 
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className={this.activity(this.act1())} >
                    <img src={img3} className="d-block w-100" alt="..." style={{height:"800px"}}/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className={this.activity(this.act2())}>
                    <img src={img2} className="d-block w-100" alt="..." style={{height:"800px"}}/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className={this.activity(this.act3())}>
                    <img src={img1} className="d-block w-100" alt="..." style={{height:"800px"}}/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#" role="button" data-slide="prev" onClick={this.backward}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.forward} role="button" data-slide="next" onClick={this.forward}>
                <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        );
    }
}
 
export default TopSlide;
