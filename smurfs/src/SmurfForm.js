import React, { Component } from 'react'
import {connect} from "react-redux";
import {addSmurfs} from "./actions/index.js";

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
        console.log(this.props, "smurf forms")
        return (
            <div>
            <h3>Add New Smurf To Your Village Below</h3>
            <form onSubmit={this.OnSubmitChanges}>
                <input onChange={this.handleChange} name="name" value={this.state.name} placeholder="name here"/>
                <input onChange={this.handleChange} name="age" value={this.state.age} placeholder="age here"/>
                <input onChange={this.handleChange} name="height" value={this.state.height} placeholder="height here"/>
                <button> Click To Add</button>
            </form>
            </div>
        )
    }
}
export default connect(null, {addSmurfs})(SmurfForm);
