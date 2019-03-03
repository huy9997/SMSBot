import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import ContactList from "../components/ContactList";
import IconButton from "../components/IconButton";
import Button from "../components/Button";
import Input from "../components/Input";
import DismissKeyboard from "../components/DismissKeyboard";
import SearchBar from "../components/SearchBar";
import { Consumer } from "../context/Context";

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
          source={require("../assets/Icons/cancel.png")}
          onPress={() => navigation.goBack()}
        />
      )
    };
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  createEvent = async() => {
    const{eventName,message} = this.state;
    const response = await fetch('http://61f950e6.ngrok.io/createEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        eventName: this.state.eventName,
        message: this.state.message
      })
    });


    //console.log(`inside the react native project ${response._bodyText}`)
  }



  filterData = (text, contactsData) => {
    const contactsFilterData = contactsData.filter(contactsData => {
      const contactName = contactsData.fullName.toLowerCase();
      const searchText = text.toLowerCase();
      return contactName.includes(searchText);
    });

    return contactsFilterData;
  };

  sortDataAlphabetically = contacts => {
    return contacts.sort((firstContact, secondContact) => {
      const firstConactName = firstContact.fullName.toLowerCase();
      const secondContactName = secondContact.fullName.toLowerCase();

      if (firstConactName < secondContactName) {
        return -1;
      } else if (firstConactName > secondContactName) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  getContactsToDisplay = (text, contacts) => {
    const filteredContacts = this.filterData(text, contacts);
    const sortedContacts = this.sortDataAlphabetically(filteredContacts);

    return sortedContacts;
  };

  render() {
    const { eventName, message, search } = this.state;

    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          const contactsToDisplay = this.getContactsToDisplay(search, contacts);

          return (
            <DismissKeyboard>
              <View style={styles.mainContainer}>
                <KeyboardAvoidingView
                  style={styles.centerContentContainer}
                  behavior="padding"
                >
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
                      source={require("../assets/Icons/search.png")}
                      value={search}
                      placeholder="Search"
                      stateToBeChanged="search"
                      onChangeText={this.onChangeText}
                    />
                  </View>
                  <View style={styles.scrollContainer}>
                    <ContactList contacts={contactsToDisplay} />
                  </View>
                </KeyboardAvoidingView>
                <View style={styles.buttonContainer}>
                  <Button title="Create Event" onPress={this.createEvent} />
                </View>
              </View>
            </DismissKeyboard>
          );
        }}
      </Consumer>
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
    height: 100,
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
