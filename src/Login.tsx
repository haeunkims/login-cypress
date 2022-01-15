import { props } from "cypress/types/bluebird";
import React, { Component } from "react";
import "./Login.css";

interface Props {
  children: JSX.Element;
}
interface State {
  user: string;
  password: string;
}
class Login extends Component {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = { user: "", password: " " };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert("A name was submitted: " + this.state.user);
    event.preventDefault();
  }

  render() {
    return (
      <div className="login__container">
        <h3> Login </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="input-column"
              name="user"
              type="text"
              placeholder="User"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <input
            className="input-column"
            name="password"
            type="password"
            placeholder="Password"
          />
        </form>
      </div>
    );
  }
}
export default Login;
