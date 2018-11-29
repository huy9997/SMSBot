import React from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import Footer from "../components/layouts/Footer";
import DismissKeyboard from "../components/DismissKeyboard";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Input from "../components/Input";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  static navigationOptions = {
    title: "Login"
    // headerStyle: {
    //   backgroundColor: "#0C72FF"
    // },
    // headerTitleStyle: {
    //   fontWeight: "bold",
    //   fontSize: 20,
    //   color: "white"
    // },
    // headerTintColor: "white"
  };

  isFormFilled = () => {
    return this.state.email == "" || this.state.password == "";
  };

  login = () => {
    return this.props.navigation.navigate("CreateEvent");
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  render() {
    const { email, password } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
              <Logo title="SMS Bot" source={require("../assets/icon.png")} />
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
              <Button
                title="Login"
                onPress={() => this.login()}
                disabled={this.isFormFilled()}
              />
              <Text>Forgot Password?</Text>
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
  contentContainer: {
    flex: 8
  },
  logoContainer: {
    flex: 2,
    marginTop: 20
  },
  loginInputContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default Login;
