import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TextBox from "../components/TextBox";

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
            <Image source={require("../assets/icon.png")} />
            <TextBox text="SMS Bot" />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonStyle}>
              <Button title="Login" onPress={this.login} />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Sign Up" onPress={this.signUp} />
            </View>
          </View>
        </View>
        <Footer style={styles.mainContainer} title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  centerContainer: {
    flex: 6,
    backgroundColor: "black"
  },
  logoContainer: {
    flex: 1,
    marginLeft: "20%",
    marginRight: "20%",
    paddingTop: "20%",
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "green"
  },
  buttonStyle: {
    // marginLeft: "10%",
    // marginRight: "10%",
    // marginTop: "5%",
    // marginBottom: "5%",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Start;
