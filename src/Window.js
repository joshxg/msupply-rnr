import React, { Component } from "react";

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Hello Window!" };
  }

  request = () => {
    require("http").get({ hostname: "localhost", port: 9615 }, res => {
      let serverMsg = "";
      res.on("data", data => {
        serverMsg += data;
      });
      res.on("end", () => {
        this.setState({ msg: serverMsg });
      });
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.request}>Request</button>
      </div>
    );
  }
}
