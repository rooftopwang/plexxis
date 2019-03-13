import React, { Fragment } from 'react';
import '../css/App.css'
import { handleInitData } from '../action/index.js'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar.js'
import Homepage from './Homepage.js'
import Register from './Register'
import Err404 from './Err404'

class App extends React.Component {
  
  componentWillMount = () => {
    // fetch('http://localhost:8080/api/employees')
    //   .then(response => response.json())
    //   .then(employees => this.setState({ employees }))
    this.props.handleinitdata();
  }

  render() {

    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/register" component={Register} />
            <Route component={Err404} />
          </Switch>
          
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleinitdata: ()=>{
      dispatch(handleInitData())
    }
  }
}

// const mapStateToProps = (state)=>{
//   return {
//     employees: state
//   }
// }

export default connect(
  null,
  mapDispatchToProps
)(App)