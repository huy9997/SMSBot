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
// clean up

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // static navigationOptions = {
  //   title: "Login",
  //   headerStyle: {
  //     backgroundColor: "#0C72FF"
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //     fontSize: 20,
  //     color: "white"
  //   },
  //   headerTintColor: "white"
  // };

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
                  style={styles.textInputStyle}
                  placeholder="Enter Email Address"
                  placeholderTextColor="#cdcdcd"
                  onChangeText={text => this.setState({ email: text })}
                  value={email}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
              </View>
              <View style={styles.eventInputStyle}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Enter Password"
                  placeholderTextColor="#cdcdcd"
                  onChangeText={text => this.setState({ password: text })}
                  value={password}
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
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
    backgroundColor: "#559bfd"
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
    alignItems: "center"
    // backgroundColor: "green"
  },
  eventInputStyle: {
    justifyContent: "center",
    borderRadius: 50,
    width: "85%",
    height: 60,
    padding: 10,
    backgroundColor: "#005FE1"
  },
  textInputStyle: {
    height: "100%",
    width: "100%",
    color: "white",
    fontSize: 20
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
