import React, { Component } from 'react'
import { withRouter } from "react-router"
import { AiOutlineLogout } from "react-icons/ai";
import "./ChatBox.css" 
import UserFriends from './UserFriends';

 class Header extends Component {
    constructor(props)
    {
        super(props)
    }


    
    
    render() {
        return (
            <div className="header">
                
                <img className="header-user-images" src={"data:image/png;base64,"+this.props.new_image} alt="viwek" />
                <h2 className="header-user-text" >{this.props.new_name}</h2>
                <button className="logout-button"type="button" onClick={() => this.props.history.push("/Login")}><AiOutlineLogout size={20}/></button>
            </div>
        )
    }
}
export default withRouter(Header)