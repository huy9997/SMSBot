import { createSwitchNavigator } from "react-navigation";
import LoadingScreen from "../screens/Loading";
import AuthenticationStack from "./AuthenticationStack";
import ApplicationStack from "./ApplicationStack";

const RootSwitch = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Authentication: AuthenticationStack,
    Application: ApplicationStack
  },
  {
    initialRouteName: "Loading"
  }
);

export default RootSwitch;
