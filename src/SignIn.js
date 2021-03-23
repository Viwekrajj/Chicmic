import React, { Component } from 'react'
import Input from './Input'
import './App.css';

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                bday: "",
                password: "",
                re_password: "",
                u_name:"",
                firstname_message: "",
                lastname_message: "",
                email_message: "",
                contact_message: "",
                bday_message: "",
                password_message: "",
                check_firstname: false,
                check_lastname: false,
                check_email: false,
                check_contact: false,
                check_bday: true,
                check_password: false,
            }
        }
    }
    checkpassword() {
        if (this.state.password !== this.state.re_password) {
            console.log("error")
            this.setState({ re_password: "" })
        }


    }
    birth(e) {
        var dtCurrent = new Date()
        console.log(e.target.value)

        const [DAY, MONTH, YEAR] = (dtCurrent.toLocaleDateString().split("/"))
        const [YEAR1, MONTH1, DAY1] = (e.target.value.split("-"))

        console.log(YEAR1, YEAR1, YEAR - YEAR1)
        if (YEAR - YEAR1 <= 18) {
            alert("your age must be more than 18")
            this.setState({ bday: "" })
            this.setState({ check: "false" })
        }
        if (YEAR - YEAR1 >= 50) {
            alert("your age must be less than 50")
            this.setState({ bday: "" })
            this.setState({ check: "false" })

        }





    }



    handleChange = (e) => {
        const regExForUserName = /^[A-Za-z]+$/;
        const regExForEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
        const regExForPhone = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        const regExForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;




        this.setState({ [e.target.name]: e.target.value })

        if (e.target.name === "firstname") {
            if (e.target.value.length === 0) {
                this.setState({ firstname_message: "" })
                this.setState({ check_firstname: false })

            }
            else if (e.target.value.length === 1 || e.target.value.length === 2) {

                if (regExForUserName.test(e.target.value)) {
                    this.setState({ firstname_message: "length must be of 3 " })
                    this.setState({ check_firstname: false })
                }
                else {
                    this.setState({ firstname_message: "use alphabet only" })
                    this.setState({ check_firstname: false })

                }


            }
            else if (e.target.value.length >= 15) {
                if (regExForUserName.test(e.target.value)) {
                    this.setState({ firstname_message: "length can't be more than 15 " })
                    this.setState({ check_firstname: false })
                }
                else {
                    this.setState({ firstname_message: "use alphabet only" })
                    this.setState({ check_firstname: false })
                }



            }
            else if (e.target.value.length >= 3 && regExForUserName.test(e.target.value)) {
                this.setState({ firstname_message: "" })

                this.setState({ check_firstname: true })
                console.log(this.state.check_firstname)

            }
            else {
                this.setState({ firstname_message: "use alphabet only" })

                this.setState({ check_firstname: false })


            }


        }

        if (e.target.name === "lastname") {
            console.log(e.target.value.length)
            if (e.target.value.length === 0) {
                this.setState({ lastname_message: "" })
                this.setState({ check_lastname: false })

            }
            else if (e.target.value.length === 1 || e.target.value.length === 2) {

                if (regExForUserName.test(e.target.value)) {
                    this.setState({ lastname_message: "length must be of 3 " })
                    this.setState({ check_lastname: false })
                }
                else {
                    this.setState({ lastname_message: "use alphabet only" })
                    this.setState({ check_lastname: false })

                }


            }
            else if (e.target.value.length >= 15) {
                if (regExForUserName.test(e.target.value)) {
                    this.setState({ lastname_message: "length can't be more than 15 " })
                    this.setState({ check_lastname: false })
                }
                else {
                    this.setState({ lastname_message: "use alphabet only" })
                    this.setState({ check_lastname: false })
                }



            }
            else if (e.target.value.length >= 3 && regExForUserName.test(e.target.value)) {
                this.setState({ lastname_message: "" })

                this.setState({ check_lastname: true })


            }
            else {
                this.setState({ lastname_message: "use alphabet only" })

                this.setState({ check_lastname: false })


            }


        }

        if (e.target.name === "email") {
            console.log(JSON.parse(localStorage.getItem(e.target.value)))
            if (JSON.parse(localStorage.getItem(e.target.value))) 
            {
                alert("user already exits with this email-id")
                this.setState({ check_email: false })
                this.setState({ email_message: "" })
            }
            if (e.target.value.length === 0) {
                this.setState({ check_email: false })
                this.setState({ email_message: "" })

            }
            else if (e.target.value.length > 0) {
                if (regExForEmail.test(e.target.value)) {
                    this.setState({ check_email: true })
                    this.setState({ email_message: "" })
                }
                else {
                    this.setState({ check_email: false })
                    this.setState({ email_message: "use proper email" })


                }


            }

        }
        if (e.target.name === "bday") {
            this.birth(e)

        }
        if (e.target.name === "contact") {

            console.log(regExForPhone.test(e.target.value))
            if (e.target.value.length === 0) {
                this.setState({ contact_message: "" })
                this.setState({ check_contact: false })


            }
            else if (e.target.value.length >0) {

                // console.log(regExForPhone.test(e.target.value))
                // console.log(e.target.value.length)
                if (regExForPhone.test(e.target.value)) {
                    this.setState({ check_contact: true })
                    this.setState({ contact_message: "" })
                }
                else {

                    this.setState({ contact_message: "use proper phone no" })
                    this.setState({ check_contact: false })
                }

            }

        }

        if (e.target.name === "password") {
            if (e.target.value.length === 0) {
                this.setState({ password_message: "" })
                this.setState({ check_password: false })


            }
            else if (regExForPassword.test(e.target.value)) {
                this.setState({ check_password: true })
                this.setState({ password_message: "" })

            }
            else {
                this.setState({ check: false })
                this.setState({ password_message: " must contains uppercase, lowercase, special character and a number" })
            }
        }


    }
    final = (form) => {

        if (this.state.check_firstname === true
            && this.state.check_lastname === true
            && this.state.check_email === true
            && this.state.check_contact === true
            && this.state.check_bday === true
            && this.state.check_password === true) {

            alert("input has been submitted")
            this.setState({ firstname:"",lastname:"",email:"",bday:"",contact:"",password:"",re_password:"" })
            
            form.reset();
        }
        else {
            alert("please do it again")
            if (this.state.check_firstname === false) {
                this.setState({ firstname: "" })
            }
            if (this.state.check_lastname === false) {
                this.setState({ lastname: "" })
            }
            if (this.state.check_email === false) {
                this.setState({ email: "" })
            }
            if (this.state.check_password === false) {
                this.setState({ password: "" })
            }

        }

    }
    
    userDetails = (e) => {
        console.log(e, 'heres')
        // e.preventDefault();
       
        this.checkpassword();
        this.final(e.target);
        const user = this.state.email;
        localStorage.setItem(user, JSON.stringify(this.state))

    }

    render() {




        return (
            <div className="counter">
        {this.props.location.pathname === "/Login" ? <p></p> : <button className="Login" type="button" onClick={() => this.props.history.push("/Login")}>Log IN</button>}
                

                <form onSubmit={this.userDetails}>
                    <Input name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        type="text"
                        place="Firstname" />

                    {this.state.firstname_message}





                    <Input
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        type="text"
                        place="Lastname" />

                    {this.state.lastname_message}





                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        place="Email" />

                    {this.state.email_message}





                    <Input
                        name="contact"
                        value={this.state.contact}
                        onChange={this.handleChange}
                        type="tel"
                        place="Contact-no" />

                    {this.state.contact_message}




                    <Input
                        name="bday"
                        value={this.state.bday}
                        onChange={this.handleChange}
                        type="date"
                        place="date-of-birth" />




                    <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        place="Password" />

                    {this.state.password_message}



                    <Input
                        name="re_password"
                        value={this.state.re_password}
                        onChange={this.handleChange}
                        type="password"
                        place="Confirm-Password" />



                    <button className="submit">Submit</button>



                </form>

            </div>
        )
    }
}


