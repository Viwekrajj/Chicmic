import React, { Component } from 'react'
import UserFriends from './UserFriends'
import img from "./images/viwek.jpg"
import "./modal.css"
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit} from "react-icons/ai";

export default class SidebarChats extends Component {
    constructor(props)
    {
        super(props)
          console.log(props,"lets")
          this.state={
              showImage:false
          }
    }
    fullImage=()=>{
        this.setState({showImage:true})
        
    }
    close=()=>{
        this.setState({showImage:false})
    }
    render() {
        console.log(this.state.showImage)
        return (
            <div className="SidebarChats">
                <img className="user-images" onClick={this.fullImage} src={"data:image/png;base64,"+this.props.image} alt="viwek"/>
                <p className="user-name">{this.props.name}</p>
                {this.state.showImage &&  <UserFriends >
                    <div className = "modal-image">
                        <h1 className="close" onClick={this.close}><AiOutlineClose/></h1>
                        
                     <img className="full-images"  src={"data:image/png;base64,"+this.props.image} alt="viwek"/>
                     <h1 className="full-name">{this.props.name}</h1>
                       

                    </div>
                </UserFriends>
                }

                {/* <button type="button" className="user-edits" ><AiFillEdit size={20}/></button> */}

            </div>
        )
    }
}
