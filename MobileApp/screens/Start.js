import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";

const Start = props => {
  const { navigation } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={{ height: 200, width: 200 }}
            source={require("../assets/icon.png")}
          />
          <Text style={styles.textStyle}>SMS Bot</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
      <Footer style={styles.mainContainer} title />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#559bfd"
  },
  contentContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    marginTop: 20,
    fontSize: 55,
    color: "white"
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default Start;
