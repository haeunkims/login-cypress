import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./Login.css";

type PathParamsType = {};

interface Props extends RouteComponentProps<PathParamsType> {
  children?: JSX.Element;
}
interface State {
  user: string;
  password: string;
}

const user1 = {
  username: "ray",
  password: 1234,
};
const user2 = {
  username: "kay",
  password: 1111,
};
const users = [user1, user2];

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { user: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ user: event.target.value });
  }

  handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentAccount = users.find(
      (usr) => usr.username === this.state.user
    );
    console.log(currentAccount);
    if (currentAccount?.password === +this.state.password) {
      this.props.history.push(`/welcome?username=${currentAccount.username}`);
      //else prompt the user or password is wrong
    }
  }

  render() {
    return (
      <div className="login__container">
        <h3> Login </h3>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            className="input-column"
            name="user"
            type="text"
            placeholder="User"
            value={this.state.user}
            onChange={this.handleChangeUsername}
          />
          <input
            className="input-column"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
