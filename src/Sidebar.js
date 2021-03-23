import React, { Component } from 'react'
import SidebarChats from './SidebarChats';
import './User.css';
import img from "./images/viwek.jpg"

export default class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="Login-user">
                    <img className="Login-user-images" src={img} alt="viwek" />
                    <div className="Login-user-text">
                        <h2 >viwek Ranjan</h2>
                    </div>
                </div>
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />



            </div>
        )
    }
}
