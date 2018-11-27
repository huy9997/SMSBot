import { createStackNavigator } from "react-navigation";

import CreateEventScreen from "../screens/CreateEvent";
import StartScreen from "../screens/Start";

const IntroStack = createStackNavigator({
  Intro: {
    screen: StartScreen
  },
  CreateEvent: {
    screen: CreateEventScreen
  }
});

export default IntroStack;
