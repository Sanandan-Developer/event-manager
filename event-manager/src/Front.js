import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './component/header.js'
import Header from './component/header.js'
//import About from './component/about.js'
import TopSlide from './component/top.js'
import About from './component/about.js'
import Contacts from './component/contacts.js'


class Front extends Component {
  render() { 
    return (
      <div>
        <Header />
        <TopSlide />
        <About />
        <Contacts />
      </div> 
    )
  }
}
 
export default Front;
