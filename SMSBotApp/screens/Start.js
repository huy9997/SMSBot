import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";

login = navigation => {
  return navigation.navigate("Login");
};

signUp = navigation => {
  return navigation.navigate("SignUp");
};

const Start = props => {
  const { navigation } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            // style={{ height: 50, width: 50 }}
            source={require("../assets/icon.png")}
          />
          <Text style={styles.textStyle}>SMS Bot</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Login" onPress={() => login(navigation)} />
          <Button title="Sign Up" onPress={() => signUp(navigation)} />
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
    fontSize: 15,
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
