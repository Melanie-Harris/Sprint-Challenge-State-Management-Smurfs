import React, { Component } from "react";
import { connect } from "react-redux";

import  SmurfCharList from "../components/SmurfCharList"
import {fetchData} from "../actions"



class SmurfsViewList extends Component {
   
    componentDidMount() {
        // calling action
        this.props.fetchData()
    }
   

    render() {
        // if (this.props.fetchData) {
        //     return <p>hgjh</p>
        //         // loader info here
            
        // }

        console.log(this.props, "smurfs view list")
        return (
            <div>
                <SmurfCharList characters={this.props.characters} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        characters: state.smurfCharReducer.characters,
        fetching: state.smurfCharReducer.fetching,
    }
};

export default connect (mapStateToProps,
    {
        fetchData
    }
    )(SmurfsViewList);


