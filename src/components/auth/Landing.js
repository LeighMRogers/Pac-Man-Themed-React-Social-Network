import React, { Component } from "react"

class Landing extends Component {
    render() {
        return (
          <React.Fragment>
              <p>This is the ghastly Landing Page for Login and Registration</p>
              <Login
                    {...props}/>
            <Registration
                     {...props}/>
          </React.Fragment>
        );
      }
    }
export default Landing