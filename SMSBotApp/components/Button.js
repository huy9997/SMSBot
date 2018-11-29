import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// might need to change this to a functional component

class Button extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  disabledButton = () => {
    const { title, buttonBorderStyle, buttonTextStyle, disabled } = this.props;

    let disabledButtonBorderStyle;
    let disabledButtonTextStyle;

    if (buttonBorderStyle) {
      disabledButtonBorderStyle = {
        ...buttonBorderStyle,
        backgroundColor: "#E9EAED"
      };
    } else {
      disabledButtonBorderStyle = {
        ...styles.defaultButtonBorderStyle,
        backgroundColor: "#E9EAED"
      };
    }

    if (buttonTextStyle) {
      disabledButtonTextStyle = {
        ...buttonTextStyle,
        color: "#cdcdcd"
      };
    } else {
      disabledButtonTextStyle = {
        ...styles.defaultButtonTextStyle,
        color: "#cdcdcd"
      };
    }

    return (
      <TouchableOpacity style={disabledButtonBorderStyle} disabled={disabled}>
        <Text style={disabledButtonTextStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  clickableButton = () => {
    const { onPress, title, buttonBorderStyle, buttonTextStyle } = this.props;

    return (
      <TouchableOpacity
        style={
          buttonBorderStyle
            ? buttonBorderStyle
            : styles.defaultButtonBorderStyle
        }
        onPress={onPress}
      >
        <Text
          style={
            buttonTextStyle ? buttonBorderStyle : styles.defaultButtonTextStyle
          }
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { disabled } = this.props;

    return disabled ? this.disabledButton() : this.clickableButton();
  }
}

const styles = StyleSheet.create({
  defaultButtonBorderStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#0144A0"
  },
  defaultButtonTextStyle: {
    fontSize: 20,
    color: "white"
  }
});

export default Button;
