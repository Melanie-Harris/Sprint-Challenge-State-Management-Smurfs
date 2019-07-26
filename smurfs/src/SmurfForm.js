import React, { Component } from 'react'
import {connect} from "react-redux";
import {addSmurfs} from "./actions"

 class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    OnSubmitChanges = (e) => {
        e.preventDefault();
        this.props.addSmurfs(this.state)
    }

    render() {
        return (
            <form onSubmit={this.OnSubmitChanges}>
                <input onChange={this.handleChange} name="name" value={this.state.name}/>
                <input onChange={this.handleChange} name="age" value={this.state.age}/>
                <input onChange={this.handleChange} name="height" value={this.state.height}/>
                <button> Click to Add</button>
            </form>
        )
    }
}
export default connect(null, {addSmurfs})(SmurfForm);
