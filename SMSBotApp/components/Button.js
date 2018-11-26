import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import TextBox from "../components/TextBox";

const Button = props => {
  const { text } = props;

  _onPressButton = () => {
    console.log("pressed");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
      <TextBox text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    marginTop: "5%",
    marginBottom: "5%",
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderColor: "#fff",
    alignSelf: "stretch"
  }
});

export default Button;
