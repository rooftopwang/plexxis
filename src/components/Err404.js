import React, { Component } from 'react'
import { connect } from 'react-redux'


class Err404 extends Component {
    
    render(){
        return (
            <h1>404 Page</h1>
        )
    }
}


export default connect(null, null)(Err404)