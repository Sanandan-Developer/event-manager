import React, { Component } from 'react';
import './css/sign.css'
import Header from './header.js'
import logo1 from './imgs/logo1.png'
import axios from 'axios'
import { useHistory } from "react-router-dom";
const querystring = require('querystring');


function LogIn(){

        const history = useHistory()

        function login(e){
            e.preventDefault()
            //console.log(document.getElementById('user_login').value)
            var request = {
                email: document.getElementById('user_login').value,
                password: document.getElementById('user_password').value
            }
            axios.post('http://localhost:3000/login', querystring.stringify(request))
            .then(resp =>{
                console.log(resp)
                if(resp.status === 200){
                    history.push("/User")
                }
                //console.log(resp)
                alert(resp.data.message)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        
        return (
            <div>
                <Header />
                <div class="wrapper fadeInDown">
                <div id="formContent">
                    
                    <div class="fadeIn first">
                        <img src={logo1} id="icon" alt="User Icon" width="20%" height="20%" />
                    </div>


                    <form onSubmit={e=> login(e)}>
                    <input type="text" id="user_login" class="fadeIn second" name="login" placeholder="login" />
                    <input type="password" id="user_password" class="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" class="fadeIn fourth" value="Log In"/>
                    </form>

 
                    <div id="formFooter">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
                </div>

            </div>
        );
}




 
export default LogIn;