import React, { Component } from 'react'
import ContactBox from './ContactBox'
import Sidebar from './Sidebar'

export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(this.props,"5555")
        
    }
    render() {
        return (
            <div className="Home">
                
                <Sidebar user_name={this.props.location.state}/>
                <ContactBox />
                
            </div>
        )
    }
}
