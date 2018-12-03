import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const responseJson = await response.json();
    this.setState({ contacts: responseJson.reverse(), isLoading: false });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
