import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import Footer from "../components/layouts/Footer";
import DismissKeyboard from "../components/DismissKeyboard";
import Button from "../components/Button";

// todo
// remove styling in input
// clean up

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#0C72FF"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "white"
    },
    headerTintColor: "white"
  };

  state = {
    email: "",
    password: ""
  };

  isFormFilled = () => {
    return this.state.email == "" || this.state.password == "";
  };

  login = () => {
    return this.props.navigation.navigate("CreateEvent");
  };

  render() {
    const { email, password } = this.state;

    return (
      <DismissKeyboard>
        <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
          <View style={styles.centerContainer}>
            <View style={styles.logoContainer}>
              <Image source={require("../assets/icon.png")} />
              <Text>SMS Bot</Text>
            </View>
            <View style={styles.loginInputContainer}>
              <View style={styles.eventInputStyle}>
                <TextInput
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  placeholder="Enter Email Address"
                  onChangeText={text => this.setState({ email: text })}
                  value={email}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
              </View>
              <View style={styles.eventInputStyle}>
                <TextInput
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  placeholder="Enter Password"
                  onChangeText={text => this.setState({ password: text })}
                  value={password}
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
              {/* <View style={styles.buttonStyle}>
                <Button
                  title="Login"
                  onPress={this.login}
                  disabled={this.isFormFilled()}
                />
              </View> */}
              <Button
                title="Login"
                onPress={this.login}
                disabled={this.isFormFilled()}
              />
            </View>
          </View>
          <Footer style={styles.mainContainer} title />
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue"
  },
  centerContainer: {
    flex: 8
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "blue"
  },
  loginInputContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "green"
  },
  eventInputStyle: {
    borderRadius: 50,
    width: "85%",
    height: 60,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "red"
  },
  buttonStyle: {
    width: "85%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Login;
