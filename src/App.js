import React, { Component } from 'react'
import { Route, withRouter,Switch } from 'react-router-dom';

import SignIn from './SignIn'
import Login from './Login'
import Home from './Home'



class App extends Component {
  constructor(props) {
    super(props)
    {

    }
  }






  render() {
    console.log(this.props, 'propss')
    return (
      <div>

        {/* {this.props.location.pathname === "/Login" ? <p></p> : <button className="Login" type="button" onClick={() => this.props.history.push("/Login")}>Log IN</button>}
        {this.props.location.pathname === "/" ? <p></p> : <button className="Login" type="button" onClick={() => this.props.history.push("/")}>Sign Up</button>} */}



        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Home" component={Home} exact />
        </Switch>




        {/* {this.props.location.pathname==="/Login"?<p></p>:<button className="submit" type="button" onClick={() => this.props.history.push("/Login")}>Login IN</button>} */}







      </div>
    )
  }
}

export default withRouter(App);