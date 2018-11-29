import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TextBox from "../components/TextBox";

import Button from "../components/Button";

class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    console.log("login");
    return this.props.navigation.navigate("CreateEvent");
  };

  signUp = () => {
    console.log("sign up");
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.logoContainer}>
            <Image
              // style={{ height: 50, width: 50 }}
              source={require("../assets/icon.png")}
            />
            <Text>SMS Bot</Text>
          </View>
          <View style={styles.buttonsContainer}>
            {/* <View style={styles.buttonStyle}>
              <Button title="Login" onPress={this.login} />
            </View> */}
            {/* <View style={styles.buttonStyle}>
              <Button title="Sign Up" onPress={this.signUp} />
            </View> */}
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
  centerContainer: {
    flex: 6,
    // width: "100%",
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
  buttonsContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
    // backgroundColor: "green"
  },
  buttonStyle: {
    width: "80%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Start;
