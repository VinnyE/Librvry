import React, { Component } from "react";

export const AuthContext = React.createContext(null);

class EnhancedAuthProvider extends Component {
  state = {
    token: null,
    responseError: null,
    requesting: false
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
            handleSignIn: ({ email, password }) => {
              this.setState(
                {
                  requesting: true
                },
                async () => {
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
                      responseError: response.error,
                      requesting: false
                    });
                  } else if (response.success && response.token) {
                    localStorage.setItem("clientToken", response.token);
                    this.setState({
                      token: response.token,
                      responseError: null,
                      requesting: false
                    });
                  }
                }
              );
            },
            handleSignOut: async () => {
              this.setState(
                {
                  requesting: true
                },
                async () => {
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
                    token: null,
                    requesting: false
                  });
                }
              );
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
