import React, { Component } from 'react'
import ContactBox from './ContactBox'
import Sidebar from './Sidebar'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                
                <Sidebar />
                <ContactBox />
                
            </div>
        )
    }
}
