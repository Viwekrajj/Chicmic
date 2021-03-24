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
        
        this.state={
            show:false,
            user_friends:"",
            user_friends_message:"",
            check_user_friends:"",
            image:""
        }
    }


    convertImage=(e)=>{
        let binartString=e.target.result;
        this.setState({image:btoa(binartString)})

    }
    handleImage=(e)=>{
        let file=e.target.files[0]
        if(file)
        {
            const reader = new FileReader()
            reader.onload=this.convertImage.bind(this);
            reader.readAsBinaryString(file)
        }
    
    }
    handleChange=(e)=>{
        const regExForUserName = /^[A-Za-z]+$/;
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.name === "user_friends") {
            if (e.target.value.length === 0) {
                this.setState({ user_friends_message: "" })
                this.setState({  check_user_friends: false })

            }
            else if (e.target.value.length === 1 || e.target.value.length === 2) {

                if (regExForUserName.test(e.target.value)) {
                    this.setState({ user_friends_message: "length must be of 3 " })
                    this.setState({  check_user_friends: false })
                }
                else {
                    this.setState({ user_friends_message: "use alphabet only" })
                    this.setState({ check_user_friends: false })

                }


            }
            else if (e.target.value.length >= 15) {
                if (regExForUserName.test(e.target.value)) {
                    this.setState({ user_friends_message: "length can't be more than 15 " })
                    this.setState({  check_user_friends: false })
                }
                else {
                    this.setState({ user_friends_message: "use alphabet only" })
                    this.setState({ check_user_friends: false })
                }



            }
            else if (e.target.value.length >= 3 && regExForUserName.test(e.target.value)) {
                this.setState({ user_friends_message: "" })

                this.setState({  check_user_friends: true })
                console.log(this.state.check_firstname)

            }
            else {
                this.setState({ user_friends_message: "use alphabet only" })

                this.setState({  check_user_friends: false })


            }


        }
    }
   


    showModel=()=>{
        this.setState({show:true})
    }
    hideModel=()=>{
        const currentEmail = JSON.parse(localStorage.getItem(this.props.user_name)).email;
        
        const data={
            user_friends:this.state.user_friends,
            image:this.state.image
        }
         
        const friend_list=JSON.parse(localStorage.getItem("friend_list"))||{}
        const arr = friend_list[currentEmail] || []
        arr.push(data)
        friend_list[currentEmail]=arr;
        localStorage.setItem("friend_list", JSON.stringify(friend_list))
        this.setState({show:false})

       }
    

    temp=()=>{
        console.log("hello")
        const friends= JSON.parse(localStorage.getItem("friend_list"))[this.props.user_name];
        console.log(friends,"friends")
        
        //  console.log(friends[0].image,"friends")
        
         return friends.map(element => {
           
            return (<SidebarChats name={element.user_friends} image={element.image}/>)
        });

    }
    render() {
          const current_User = JSON.parse(localStorage.getItem(this.props.user_name)).firstname;
         
        
          
         console.log(current_User)
         
         
        
        return (
            <div className="Sidebar">
                <div className="Login-user">
                    <img className="Login-user-images" src={img} alt="viwek" />
                    <div className="Login-user-text">
                    
                        <p >{current_User}</p>
                        
                    </div>
                    
                    <button className="button-add-model" type="button" onClick={this.showModel}><h1><VscAdd /></h1></button>
                   {this.state.show &&  <UserFriends show={this.state.show}>

                       <div className = "modal">
                       <h1 className="close" onClick={this.close}><AiOutlineClose/></h1>
                       <input className="model-input"
                       name="user_friends"
                       type="text" 
                       placeholder="enter user name"  
                       value={this.state.user_friends}
                       onChange={this.handleChange}></input>
                       <p className="input-error">{this.state.user_friends_message}</p>
                       <p className="image-text">Enter URl of your image</p>
                       {/* <input className="image-input" type="file" onChange={this.handleImage}></input>
                        */}
                       
                       <button className="model-button" type="button" onClick={this.hideModel}>submit</button>

                       </div>
                   </UserFriends>
                   } 
                </div>
                
                {JSON.parse(localStorage.getItem("friend_list")) && this.temp()}
                
               



            </div>
        )
    }
}
