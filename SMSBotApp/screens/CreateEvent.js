import React from "react";
import { StyleSheet, View } from "react-native";
import ContactList from "../components/ContactList";
import IconButton from "../components/IconButton";
import Button from "../components/Button";
import Input from "../components/Input";
import DismissKeyboard from "../components/DismissKeyboard";
import SearchBar from "../components/SearchBar";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: "",
      message: "",
      search: ""
    };
  }

  // dont really need the icon as i can go back from the stack
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Create Event",
      headerRight: (
        <IconButton
          borderStyle={{ margin: 30 }}
          source={require("../assets/icon.png")}
          onPress={() => navigation.goBack()}
        />
      )
    };
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  createEvent = () => {
    console.log("create event");
  };

  render() {
    const { eventName, message, search } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          <View style={styles.centerContentContainer}>
            <View style={styles.detailContainer}>
              <Input
                placeholder="Enter Event Name"
                value={eventName}
                stateToBeChanged="eventName"
                onChangeText={this.onChangeText}
              />
              <Input
                borderStyle={styles.messageInputStyle}
                placeholder="Enter Message"
                value={message}
                stateToBeChanged="message"
                onChangeText={this.onChangeText}
                scrollEnabled={true}
                multiline={true}
              />

              <SearchBar
                source={require("../assets/icon.png")}
                value={search}
                placeholder="Search"
                stateToBeChanged="search"
                onChangeText={this.onChangeText}
              />
            </View>

            {/* Keep this but look into contact list */}
            <View style={styles.scrollContainer}>
              {/* <ScrollView style={styles.scrollContainer}>
              <Text>Hello</Text>
            </ScrollView> */}
              <ContactList />
              {/* <EventList /> */}
            </View>
            {/*  */}
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Create Event" onPress={this.createEvent} />
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  centerContentContainer: {
    flex: 8
  },
  detailContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  messageInputStyle: {
    borderRadius: 10,
    padding: 10,
    width: "80%",
    height: 150,
    backgroundColor: "#005FE1"
  },
  scrollContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#005FE1"
  }
});

export default CreateEvent;
