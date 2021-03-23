import React, { Component } from 'react'
import './User.css';
import {createPortal} from 'react-dom'
const modalRoot = document.getElementById("modal")
export default class UserFriends extends Component {
    constructor(props)
    {
        super(props)
        console.log(props)
    }
    render() {
        return (createPortal(<div>{this.props.children}</div>,modalRoot))
    }
}

