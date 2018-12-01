import React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
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
  };

  isFormFilled = () => {
    return this.state.email == "" || this.state.password == "";
  };

  login = () => {
    return this.props.navigation.navigate("Events");
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
                value={email}
                onChangeText={this.onChangeText}
                stateToBeChanged="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Input
                placeholder="Enter Password"
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
              {/* add functionality to forgot password */}
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Forgot Password?</Text>
              </TouchableOpacity>
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
    flex: 3
  },
  loginInputContainer: {
    flex: 4,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default Login;
