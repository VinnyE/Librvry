import React, { Component } from "react";

export const AuthContext = React.createContext(null);

class EnhancedAuthProvider extends Component {
  state = {
    token: null,
    responseError: null
  };

  componentDidMount() {
    const token = localStorage.getItem("clientToken");

    if (token) {
      this.setState({
        token
      });
    }
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          actions: {
            handleSignIn: async ({ email, password }) => {
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
                localStorage.setItem("clientToken", response.token);
                this.setState({
                  token: response.token,
                  responseError: null
                });
              }
            },
            handleSignOut: async () => {
              const promise = await fetch("/api/logout", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              });

              const response = await promise.json();
              localStorage.removeItem("clientToken");

              this.setState({
                token: null
              });
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
