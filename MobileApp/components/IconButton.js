import React from "react";
import { TouchableOpacity, Image } from "react-native";

const IconButton = props => {
  const { borderStyle, onPress, source, iconStyle } = props;

  return (
    <TouchableOpacity style={borderStyle} onPress={onPress}>
      <Image style={iconStyle} source={source} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  borderStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#0144A0",
    position: "absolute",
    bottom: 25,
    right: 25
  },
  iconStyle: {
    height: 30,
    width: 30
  }
};

export default IconButton;
