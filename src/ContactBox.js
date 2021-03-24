import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import SidebarChats from './SidebarChats';
import './User.css';


export default class ContactBox extends Component {
    render() {
        return (
            <div className="ContactBox">
               <Header/>
               
               <Footer/>
                

                
            </div>
        )
    }
}
