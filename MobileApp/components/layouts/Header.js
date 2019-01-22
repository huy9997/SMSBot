import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TextBox from "../TextBox";

const Header = props => {
  const { text } = props;

  return (
    <View style={styles.mainContainer}>
      <TextBox text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Header;
