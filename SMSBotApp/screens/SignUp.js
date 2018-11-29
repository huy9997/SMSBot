import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import DismissKeyboard from "../components/DismissKeyboard";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Input from "../components/Input";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  static navigationOptions = {
    title: "Sign Up"
  };

  signUp = () => {
    console.log(this.state);
    return this.props.navigation.navigate("CreateEvent");
  };

  isFormFilled = () => {
    return (
      this.state.confirmPassword == "" ||
      this.state.email == "" ||
      this.state.password == ""
    );
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          <View style={styles.centerContainer}>
            <View style={styles.logoContainer}>
              <Logo source={require("../assets/icon.png")} title="SMS Bot" />
            </View>
            <KeyboardAvoidingView
              style={styles.loginInputContainer}
              behavior="padding"
            >
              <Input
                placeholder="Enter Email Address"
                placeholderTextColor="#cdcdcd"
                value={email}
                onChangeText={this.onChangeText}
                stateToBeChanged="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Input
                placeholder="Enter Password"
                placeholderTextColor="#cdcdcd"
                value={password}
                onChangeText={this.onChangeText}
                stateToBeChanged="password"
                textContentType="password"
                secureTextEntry={true}
              />
              <Input
                placeholder="Confirm Password"
                placeholderTextColor="#cdcdcd"
                value={confirmPassword}
                onChangeText={this.onChangeText}
                stateToBeChanged="confirmPassword"
                textContentType="password"
                secureTextEntry={true}
              />
              <Button
                title="Create Account"
                onPress={this.signUp}
                disabled={this.isFormFilled()}
              />
            </KeyboardAvoidingView>
          </View>
          <Footer style={styles.mainContainer} />
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#559bfd"
  },
  centerContainer: {
    flex: 8
  },
  logoContainer: {
    flex: 3
  },
  loginInputContainer: {
    flex: 4,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default SignUp;
