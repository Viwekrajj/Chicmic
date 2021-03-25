import React, { Component } from 'react'
import { VscAdd } from "react-icons/vsc";
import SidebarChats from './SidebarChats';
import './User.css';
import UserFriends from './UserFriends'
import img from "./images/viwek.jpg"
import "./modal.css"
import { AiOutlineClose } from "react-icons/ai";

export default class Sidebar extends Component {
    constructor(props){
        super(props)
        
        
    }


    
    
    render() {
          const current_User = localStorage.getItem(this.props.user_name) && JSON.parse(localStorage.getItem(this.props.user_name)).firstname;
         
        
          
         console.log(current_User)
         
         
        
        return (
            <div className="Sidebar">
                <div className="Login-user">
                    <img className="Login-user-images" src={img} alt="viwek" />
                    <div className="Login-user-text">
                    
                        <p >{current_User}</p>
                        
                    </div>
                    
                    <button className="button-add-model" type="button" onClick={this.props.showModel}><h1><VscAdd /></h1></button>
                   {this.props.show &&  <UserFriends show={this.props.show}>

                       <div className = "modal">
                       <h2 className="close" onClick={this.props.closeModel}><AiOutlineClose/></h2>
                       <input className="model-input"
                       name="user_friends"
                       type="text" 
                       placeholder="enter user name"  
                       value={this.props.user_friends}
                       onChange={this.props.handleChange}></input>
                       <p className="input-error">{this.props.user_friends_message}</p>
                       <p className="image-text">Enter URl of your image</p>
                       <input className="image-input" type="file" onChange={this.props.handleImage}></input>
                       
                       
                       <button className="model-button" type="button" onClick={this.props.hideModel}>submit</button>

                       </div>
                   </UserFriends >
                   } 
                </div>
                
                {this.props.user_name && localStorage.getItem("friend_list") && JSON.parse(localStorage.getItem("friend_list")) && this.props.temp() }
                
               



            </div>
        )
    }
}


