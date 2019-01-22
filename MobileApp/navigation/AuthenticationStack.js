import { createStackNavigator } from "react-navigation";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";

const AuthenticationStack = createStackNavigator(
  {
    Introduction: StartScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "Introduction",

    defaultNavigationOptions: {
      title: "SMS Bot",
      headerStyle: {
        backgroundColor: "#0C72FF"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthenticationStack;
