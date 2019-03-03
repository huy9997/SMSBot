import React from "react";
import { Text, TouchableOpacity } from "react-native";

disabledButton = props => {
  const { title, borderStyle, textStyle, disabled } = props;

  return (
    <TouchableOpacity
      style={{ ...borderStyle, backgroundColor: "#E9EAED" }}
      disabled={disabled}
    >
      <Text style={{ ...textStyle, color: "#cdcdcd" }}>{title}</Text>
    </TouchableOpacity>
  );
};

clickableButton = props => {
  const { onPress, title, borderStyle, textStyle } = props;

  return (
    <TouchableOpacity style={borderStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Button = props => {
  const { disabled } = props;

  return disabled ? disabledButton(props) : clickableButton(props);
};

Button.defaultProps = {
  borderStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#0144A0"
  },
  textStyle: {
    fontSize: 20,
    color: "white"
  }
};

export default Button;
