import { createStackNavigator } from "react-navigation";
import CreateEventScreen from "../screens/CreateEvent";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import EventsScreen from "../screens/Events";

const IntroStack = createStackNavigator(
  {
    Introduction: StartScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Events: EventsScreen,
    CreateEvent: CreateEventScreen
  },
  {
    initialRouteName: "Introduction"
    // initialRouteName: "Login"
    // initialRouteName: "SignUp"
    // initialRouteName: "Events"
    // initialRouteName: "CreateEvent"
  }
);

export default IntroStack;
