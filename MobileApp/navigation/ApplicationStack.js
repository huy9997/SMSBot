import { createStackNavigator } from "react-navigation";
import CreateEventScreen from "../screens/CreateEvent";
import EventsScreen from "../screens/Events";
import EventDetailsScreen from "../screens/EventDetails";
import MessagesScreen from "../screens/Messages";

const ApplicationStack = createStackNavigator(
  {
    Events: EventsScreen,
    CreateEvent: CreateEventScreen,
    EventDetails: EventDetailsScreen,
    Messages: MessagesScreen
  },
  {
    initialRouteName: "Events",

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

export default ApplicationStack;
