import React, { Component } from 'react'
import { withRouter } from "react-router"
import { AiOutlineLogout } from "react-icons/ai";
import "./ChatBox.css" 

 class Header extends Component {
    constructor(props)
    {
        super(props)
    }


    
    
    render() {
        return (
            <div className="header">
                <button className="logout-button"type="button" onClick={() => this.props.history.push("/Login")}><AiOutlineLogout size={20}/></button>
            </div>
        )
    }
}
export default withRouter(Header)