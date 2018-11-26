import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TextInput
} from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TextBox from "../components/TextBox";
import ContactList from "../components/ContactList";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    eventName: "",
    message: "",
    searchText: ""
  };

  createEvent = () => {
    console.log("create event");
  };

  render() {
    const { eventName, message, searchText } = this.state;

    return (
      <View style={styles.mainContainer}>
        <Header style={styles.mainContainer} />
        <View style={styles.container}>
          {/* event details */}
          <View style={styles.detailContainer}>
            <View style={styles.eventInputStyle}>
              <TextInput
                placeholder="Enter Event Name"
                onChangeText={text => this.setState({ eventName: text })}
                value={eventName}
              />
            </View>
            <View style={styles.messageInputStyle}>
              <TextInput
                multiline={true}
                scrollEnabled={true}
                onChangeText={text => this.setState({ message: text })}
                value={message}
                placeholder="Enter Message"
              />
            </View>
            <View style={styles.eventInputStyle}>
              <TextInput
                placeholder="Search"
                onChangeText={text => this.setState({ searchText: text })}
                value={searchText}
              />
            </View>
          </View>
          {/* scroll list */}
          <View style={styles.scrollContainer}>
            <ContactList />
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.buttonStyle}>
            <Button
              title="Create Event"
              onPress={this.createEvent}
              color="white"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 6
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  detailContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  eventInputStyle: {
    borderRadius: 10,
    width: 350,
    height: 60,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "red"
  },
  messageInputStyle: {
    borderRadius: 10,
    padding: 10,
    width: 350,
    height: 150,
    backgroundColor: "red"
  },

  buttonStyle: {
    // marginLeft: "10%",
    // marginRight: "10%",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "blue"
  }
});

export default CreateEvent;
