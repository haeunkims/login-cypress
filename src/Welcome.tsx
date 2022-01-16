import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";

type PathParamsType = {
  username: string;
};

interface Props extends RouteComponentProps<PathParamsType> {
  children?: JSX.Element;
}
interface State {
  username: string;
}

class Welcome extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username:
        new URLSearchParams(props.location.search).get("username") || "",
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome: {this.state.username}</h1>
      </div>
    );
  }
}
export default withRouter(Welcome);
