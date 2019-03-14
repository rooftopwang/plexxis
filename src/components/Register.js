import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newuser } from '../action/index.js' 

class Register extends Component {
    state = {
        name: "rooftop", 
        code: "F10",
        profession: "Runner",
        color: "#fff",
        city: "Toronto",
        branch: "Abacus",
        assigned: true
    }

    handleInput = (e, input)=>{
        const type = e.target.type; 
        const value = type === "checkbox" ? e.target.checked : e.target.value; 
        this.setState({
            [input]: value
        })
    }

    createNewUser = ()=>{
        const usr = {
            ...this.state
        };
        this.props.register(usr);
        const { history } = this.props;
        history.push('/');
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-sm-12">Register Page</h1>
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group">
                                <label >Name</label>
                                <input className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" 
                                onChange={(e)=>{this.handleInput(e, 'name')}} value={this.state.name} />
                            </div>
                            <div className="form-group">
                                <label >Code</label>
                                <input className="form-control" id="code" placeholder="Enter Code" 
                                onChange={(e)=>{this.handleInput(e, 'code')}} value={this.state.code} />
                            </div>
                            <div className="form-group">
                                <label >Profession</label>
                                <input className="form-control" id="profession" placeholder="Enter Profession" 
                                onChange={(e)=>{this.handleInput(e, 'profession')}} value={this.state.profession} />
                            </div>
                            <div className="form-group">
                                <label >Color</label>
                                <input className="form-control" id="color" placeholder="Enter Color" 
                                onChange={(e)=>{this.handleInput(e, 'color')}} value={this.state.color} />
                            </div>
                            <div className="form-group">
                                <label >City</label>
                                <input className="form-control" id="city" placeholder="Enter City" 
                                onChange={(e)=>{this.handleInput(e, 'city')}} value={this.state.city} />
                            </div>
                            <div className="form-group">
                                <label >Branch</label>
                                <input className="form-control" id="branch" placeholder="Enter Branch" 
                                onChange={(e)=>{this.handleInput(e, 'branch')}} value={this.state.branch} />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="assigned" 
                                onChange={(e)=>{this.handleInput(e, 'assigned')}} value={this.state.assigned} />
                                <label className="form-check-label" >Assigned</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.createNewUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        register: bindActionCreators(newuser, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Register)