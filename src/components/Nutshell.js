import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Landing from "./auth/Login"
import "./Nutshell.css";

class Nutshell extends Component {
  state = {
    userName: sessionStorage.getItem("activeUser") !== null
  }
  // Check if credentials are in session storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

  setUser = () => {
    this.setState({
      user: this.isAuthenticated()
    });
  }
  //
  clearUser = () => {
    sessionStorage.removeItem("activeUser");
    this.setState({
      user: this.isAuthenticated()
    });

  }

  render() {
    return (
      <React.Fragment>
        {(this.state.user) ?
          <>
            <NavBar
              clearUser={this.clearUser}
              user={this.state.user}
              {...this.props}/>
            <ApplicationViews />
          </> :
          <Landing
            setUser={this.setUser}
            user={this.state.user} />}
      </React.Fragment>
    );
  }
}

export default Nutshell;
