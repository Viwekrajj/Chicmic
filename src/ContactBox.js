import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import SidebarChats from './SidebarChats';
import './User.css';


export default class ContactBox extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="ContactBox">
               <Header new_image={this.props.new_image} new_name={this.props.new_name}/>
               
               <Footer/>
                

                
            </div>
        )
    }
}
