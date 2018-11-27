import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import Footer from "../components/layouts/Footer";
import TextBox from "../components/TextBox";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    password: ""
  };

  login = () => {
    console.log(this.state.email);
    // return this.props.navigation.navigate("CreateEvent");
  };

  render() {
    const { email, password } = this.state;

    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <View style={styles.centerContainer}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/icon.png")} />
            <TextBox text="SMS Bot" />
          </View>
          <View style={styles.loginInputContainer}>
            <View style={styles.eventInputStyle}>
              <TextInput
                placeholder="Enter Email Address"
                onChangeText={text => this.setState({ email: text })}
                value={email}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
            <View style={styles.eventInputStyle}>
              <TextInput
                placeholder="Enter Password"
                onChangeText={text => this.setState({ password: text })}
                value={password}
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Login" onPress={this.login} />
            </View>
          </View>
        </View>
        <Footer style={styles.mainContainer} title />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  centerContainer: {
    flex: 8,
    backgroundColor: "black"
  },
  logoContainer: {
    flex: 1,
    marginLeft: "20%",
    marginRight: "20%",
    paddingTop: "20%",
    alignItems: "center"
  },
  loginInputContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "green"
  },
  eventInputStyle: {
    borderRadius: 50,
    width: 350,
    height: 60,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "red"
  },
  buttonStyle: {
    // marginLeft: "10%",
    // marginRight: "10%",
    // marginTop: "5%",
    // marginBottom: "5%",
    width: 350,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default Login;
