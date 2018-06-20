import React, { Component } from "react";

export const AuthContext = React.createContext(null);

class EnhancedAuthProvider extends Component {
  state = {
    token: null,
    responseError: null
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          actions: {
            requestSignIn: async ({ email, password }) => {
              const promise = await fetch("/api/login", {
                method: "post",
                body: JSON.stringify({
                  email,
                  password
                }),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });

              const response = await promise.json();
              if (response.error) {
                this.setState({
                  responseError: response.error
                });
              } else if (response.success && response.token) {
                this.setState({
                  token: response.token,
                  responseError: null
                });
              }
            }
          }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default EnhancedAuthProvider;
