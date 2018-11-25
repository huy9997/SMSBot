import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import TextBox from "../components/TextBox";

const Button = props => {
  const { text } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <TextBox text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "15%",
    marginRight: "15%",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

export default Button;
