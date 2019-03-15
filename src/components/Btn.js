import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteuser } from '../action/index.js'


class Btn extends Component {

    render () {
        return (
            <button onClick={()=>{this.props.deleteusr()}}>Delete</button>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        deleteusr: () => dispatch(deleteuser(ownProps.usrid))
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(Btn)