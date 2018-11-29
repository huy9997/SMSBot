import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

// might need to change this to a functional component

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  disabledButton = () => {
    const { title, buttonBorderStyle, buttonTextStyle, disabled } = this.props;

    return (
      <TouchableOpacity
        style={{ ...buttonBorderStyle, backgroundColor: "#E9EAED" }}
        disabled={disabled}
      >
        <Text style={{ ...buttonTextStyle, color: "#cdcdcd" }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  clickableButton = () => {
    const { onPress, title, buttonBorderStyle, buttonTextStyle } = this.props;

    return (
      <TouchableOpacity style={buttonBorderStyle} onPress={onPress}>
        <Text style={buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { disabled } = this.props;

    return disabled ? this.disabledButton() : this.clickableButton();
  }
}

Button.defaultProps = {
  buttonBorderStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#0144A0"
  },
  buttonTextStyle: {
    fontSize: 20,
    color: "white"
  }
};

export default Button;
