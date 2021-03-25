import React, { Component } from 'react'
import UserFriends from './UserFriends'
import img from "./images/viwek.jpg"
import "./modal.css"
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit} from "react-icons/ai";
import ContactBox from './ContactBox';

export default class SidebarChats extends Component {
    constructor(props)
    {
        super(props)
        
         
    }

    render() {
        
        return (
           <div>
                <div className="SidebarChats">
                <img className="user-images" onClick={() =>this.props.fullImage(this.props.image,this.props.name)} src={"data:image/png;base64,"+this.props.image} alt="Image"/>
                <p className="user-name">{this.props.name}</p>
                {this.props.showImage &&  <UserFriends >
                    <div className = "modal-image">
                        <h1 className="close" onClick={this.props.close}><AiOutlineClose/></h1>
                        
                     <img className="full-images"  src={"data:image/png;base64,"+this.props.new_image} alt="viwek"/>
                     <h1 className="full-name">{this.props.new_name}</h1>
                       

                    </div>
                </UserFriends>
                }

               
                
            </div>
           
           </div>
        )
    }
}
