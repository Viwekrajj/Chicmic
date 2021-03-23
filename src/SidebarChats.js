import React, { Component } from 'react'
import img from "./images/viwek.jpg"

export default class SidebarChats extends Component {
    constructor(props)
    {
        super(props)
        console.log(props,"lets")
    }
    render() {
        return (
            <div className="SidebarChats">
                <img className="user-images" src={img} alt="viwek"/>
                <h2 className="user-name">{this.props.name}</h2>

            </div>
        )
    }
}
