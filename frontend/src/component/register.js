import React, { Component } from 'react';
import './css/sign.css'
import Header from './header.js'
import logo1 from './imgs/logo1.png'
import Register1 from './register/register1.js'
import Register2 from './register/register2.js'



class Register extends Component {
    state = {
        step:1
    }

    renderRegister = () => {
        if(this.state.step === 1){
            return <Register1 action={() => this.setState({step:0})}/>
        }else if(this.state.step === 0){
            return <Register2 back={() => this.setState({step: 1})}/>
        }
    }
    
    render() { 

        return (
            <div>
                {this.renderRegister()}
            </div>
        );
    }
}
 
export default Register;