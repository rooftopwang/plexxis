import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ReactTable from "react-table";
import 'react-table/react-table.css'
import columns from './ReactTable.js'

class Homepage extends Component {
    
    render(){

        return (
            <Fragment>
                <h1>Our Employees</h1>
                <ReactTable data={this.props.employees} columns={columns}/>
                
            </Fragment>
        )
    }
}

  
const mapStateToProps = (state)=>{
return {
    employees: state
}
}

export default connect(mapStateToProps)(Homepage)