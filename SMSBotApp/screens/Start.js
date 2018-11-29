import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Footer from "../components/layouts/Footer";
import TextBox from "../components/TextBox";

import Button from "../components/Button";

class Start extends React.Component {
  static navigationOptions = {
    title: "SMS Bot",
    headerStyle: {
      backgroundColor: "#0C72FF"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "white"
    }
    // headerTintColor: "white"
  };

  constructor(props) {
    super(props);
  }

  login = () => {
    return this.props.navigation.navigate("Login");
  };

  signUp = () => {
    return this.props.navigation.navigate("SignUp");
  };

  render() {
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
            <Button
              title="Login"
              onPress={this.login}
              //  buttonStyle={}
            />
            <Button
              title="Sign Up"
              onPress={this.signUp}
              // buttonStyle={}
            />
          </View>
        </View>
        <Footer style={styles.mainContainer} title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#559bfd"
  },
  contentContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "red"
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
    // backgroundColor: "green"
  }
});

export default Start;
