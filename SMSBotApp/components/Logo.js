import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Logo = props => {
  const { title, source, imageStyle, textStyle } = props;

  return (
    <View style={styles.mainContainer}>
      <Image style={imageStyle} source={source} />
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

Logo.defaultProps = {
  imageStyle: {
    height: 150,
    width: 150
  },
  textStyle: {
    fontSize: 20,
    marginTop: 20,
    color: "white"
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Logo;
