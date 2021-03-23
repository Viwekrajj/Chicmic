import React, { Component } from 'react'
import img from "./images/viwek.jpg"

export default class SidebarChats extends Component {
    render() {
        return (
            <div className="SidebarChats">
                <img className="user-images" src={img} alt="viwek"/>
                <h2 className="user-name">username</h2>

            </div>
        )
    }
}
