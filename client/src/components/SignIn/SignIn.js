import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

import styles from "./SignIn.module.css";
import { AuthContext } from "../Auth/EnhancedAuthProvider";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    fields: {
      email: "",
      password: ""
    },
    touched: {
      email: false,
      password: false
    }
  };

  handleSubmit = actions => evt => {
    evt.preventDefault();
    const errors = this.validate(
      this.state.fields.email,
      this.state.fields.password
    );
    const hasErrors = Object.keys(errors).some(val => errors[val]);

    if (hasErrors) {
      return;
    }

    actions.handleSignIn(this.state.fields);
  };

  validate = (email, password) => {
    const { touched } = this.state;
    const errors = {
      email: false,
      password: false
    };

    if (email.length === 0 && touched.email) {
      errors.email = "Email is required.";
    }

    if (!isEmail(email) && touched.email) {
      errors.email = "A valid email address is required.";
    }

    if (password.length === 0 && touched.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleEmailChange = evt => {
    this.setState({
      fields: { ...this.state.fields, email: evt.target.value }
    });
  };

  handlePasswordChange = evt => {
    this.setState({
      fields: { ...this.state.fields, password: evt.target.value }
    });
  };

  render() {
    const errors = this.validate(
      this.state.fields.email,
      this.state.fields.password
    );
    const hasErrors = Object.keys(errors).some(val => errors[val]);

    return (
      <AuthContext.Consumer>
        {context => {
          if (context.state.token) {
            return <Redirect to="/" />;
          }

          return (
            <form
              onSubmit={this.handleSubmit(context.actions)}
              className={styles.form}
            >
              <label className={styles.label} htmlFor="email">
                Email:
                <input
                  type="text"
                  placeholder="example@example.com"
                  id="email"
                  className={styles.textInput}
                  value={this.state.email}
                  onBlur={this.handleBlur("email")}
                  onChange={this.handleEmailChange}
                />
                {errors.email && (
                  <span className={styles.errorMsg}>{errors.email}</span>
                )}
              </label>
              <label className={styles.label} htmlFor="password">
                Password:
                <input
                  type="text"
                  placeholder="example123"
                  id="password"
                  className={styles.textInput}
                  value={this.state.password}
                  onBlur={this.handleBlur("password")}
                  onChange={this.handlePasswordChange}
                />
                {errors.password && (
                  <span className={styles.errorMsg}>{errors.password}</span>
                )}
              </label>
              <input
                type="submit"
                value="Log In"
                className={styles.signInBtn}
                disabled={hasErrors}
                // onClick={this.handleSubmit}
              />
            </form>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default SignIn;
