import React, { Component } from 'react'
import { RiSendPlaneLine } from "react-icons/ri";
import "./ChatBox.css" 

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <input className="footer-input" type="text" placeholder="Type a message"></input>
                <button className="footer-button"><RiSendPlaneLine size={32}/></button>
            </div>
        )
    }
}
