import React, { Component } from 'react';
import './css/sign.css'
import Header from './header.js'
import logo1 from './imgs/logo1.png'
import Register1 from './register/register1.js'
import Register2 from './register/register2.js'



class Register extends Component {
    state = {
        step:1,
        formDetails:{
            name:"",
            email:"",
            password1:"",
            password2:""
        }
    }

    callbackFunction = (FirstFormData) =>{
        this.setState({step:0, formDetails:FirstFormData})
    }

    renderRegister = () => {
        if(this.state.step === 1){
            return <Register1  parentCallBack={this.callbackFunction}/>
        }else if(this.state.step === 0){
            return <Register2 back={()=>this.setState({...this.state, step: 1})} data={this.state.formDetails}/>
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