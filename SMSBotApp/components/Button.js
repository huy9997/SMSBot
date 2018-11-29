import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// replace button with touchable opacity
// take function as props and use for onpress

class Button extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { onPress, title, buttonBorderStyle, buttonTextStyle } = this.props;

    console.log(buttonBorderStyle);

    return (
      <TouchableOpacity
        style={buttonBorderStyle ? buttonBorderStyle : styles.buttonBorderStyle}
        title="Login"
        onPress={onPress}
      >
        <Text
          style={buttonTextStyle ? buttonBorderStyle : styles.buttonTextStyle}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Button;
