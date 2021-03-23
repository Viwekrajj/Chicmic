import React, { Component } from 'react'
import './App.css';

export default class Button extends Component {
    
    render() {
        return (
            <div>
                 
                <input className="form-field" name={this.props.name} value={this.props.value} onChange={this.props.onChange} type={this.props.type} placeholder={this.props.place} 
                flag={this.props.flag} required
                />
            </div>
        )
    }
}
