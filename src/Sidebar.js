import React, { Component } from 'react'
import SidebarChats from './SidebarChats';
import './User.css';
import UserFriends from './UserFriends'
import img from "./images/viwek.jpg"
import "./modal.css"
export default class Sidebar extends Component {
    constructor(props){
        super(props)
        
        this.state={
            show:false,
            user_friends:"",
            user_friends_message:"",
            check_user_friends:""

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
        
        const userFriends = currentEmail.concat(currentEmail)
        const data={
            user_friends:this.state.user_friends
        }
        console.log()
        const currentdata=JSON.parse(localStorage.setItem(currentdata,data))||[]
        currentdata.push(data)
        const user_friend_list=JSON.parse(localStorage.setItem(user_friend_list,data))||{}
        user_friend_list={
            currentEmail:currentdata
        }
       
        
        
        
        
        

        this.setState({show:false})

       }
    

    // temp=()=>{
    //     console.log("hello")
    //     const full_data=JSON.parse(localStorage.getItem("full_data"));
    //     const current_User = JSON.parse(localStorage.getItem(this.props.user_name)).firstname;
    //     return full_data.map(element => {
    //        if(element.firstname!==current_User)
    //         return (<SidebarChats name={element.firstname}/>)
    //     });

    // }
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
                    
                    <button type="button" onClick={this.showModel}>Add</button>
                   {this.state.show &&  <UserFriends show={this.state.show}>

                       <div className = "modal">
                       <input className="model-input"
                       name="user_friends"
                       type="text" 
                       placeholder="enter user name"  
                       value={this.state.user_friends}
                       onChange={this.handleChange}></input>
                       {this.state.user_friends_message}
                       <button className="model-button" type="button" onClick={this.hideModel}>submit</button>

                       </div>
                   </UserFriends>
                   } 
                </div>
            




            </div>
        )
    }
}
