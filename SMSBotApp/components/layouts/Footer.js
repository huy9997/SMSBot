import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TextBox from "../TextBox";

const Footer = props => {
  const { text } = props;

  return (
    <View style={styles.container}>
      <TextBox text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red"
  }
});

export default Footer;
