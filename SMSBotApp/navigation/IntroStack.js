import { createStackNavigator } from "react-navigation";
import CreateEventScreen from "../screens/CreateEvent";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import EventsScreen from "../screens/Events";
import EventDetailsScreen from "../screens/EventDetails";
import MessagesScreen from "../screens/Messages";

const IntroStack = createStackNavigator(
  {
    Introduction: StartScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Events: EventsScreen,
    CreateEvent: CreateEventScreen,
    EventDetails: EventDetailsScreen,
    Messages: MessagesScreen
  },
  {
    initialRouteName: "Introduction",
    // initialRouteName: "Login",
    // initialRouteName: "SignUp",
    initialRouteName: "Events",
    // initialRouteName: "CreateEvent",
    // initialRouteName: "EventDetails",
    // initialRouteName: "Messages",

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

export default IntroStack;
