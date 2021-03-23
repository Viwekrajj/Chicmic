import React, { Component } from 'react'
import Input from './Input'
import './App.css';

export default class Display extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                email: "",
                savedPassword: "",
                password: "",
                user_logged:false

            }
        }
    }
    checkUser = (e) => {
        e.preventDefault();

        var newUser = JSON.parse(localStorage.getItem(this.state.email))
        console.log(newUser)
        if (newUser!=null)
         {
            this.setState({ savedPassword: newUser.password })
            if (this.savedPassword !== this.password) {
                
                alert("please check your username and password")
            }
            else
            {
                
                // this.setState({user_logged:true})
                // if(this.state.user_logged===true)
                // {
                //     this.props.history.push("/Home")
                // }
                // alert("user login")
                console.log(this.state.email,"kabir");
                this.props.history.push({pathname:"/Home",state:this.state.email});

                

            }
        }
        else
        {
            alert("please check your username and password")

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const regExForEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
        const regExForPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        return (

            <div className="counter">
                <h1 className="head-login">   Login form</h1>
                <div className="form">
                   {this.props.location.pathname === "/" ? <p></p> : <button className="Login" type="button" onClick={() => this.props.history.push("/")}>Sign Up</button>}
                    
                    <form onSubmit={this.checkUser}>
                        <Input name="email" value={this.state.firstname} onChange={this.handleChange} type="email" place="Email" />
                        {/* {(this.state.email.length === 0 ? <p></p> : regExForEmail.test(this.state.email)) ? <p></p> : <p>use proper email</p>} */}

                        <Input name="password" value={this.state.password} onChange={this.handleChange} type="password" place="Password" />
                        {/* {(this.state.password.length === 0) ? <p></p> : regExForPassword.test(this.state.password) ? <p></p> : <p>use unique password</p>} */}

                        <button className="submit">Submit</button>
                    </form>

                </div>


            </div>
        )
    }
}
