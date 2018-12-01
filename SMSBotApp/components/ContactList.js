import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Contact from "./Contact";
import Event from "./Event";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const responseJson = await response.json();
    this.setState({ contacts: responseJson, isLoading: false });
  }

  render() {
    const { contacts, isLoading } = this.state;

    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewInnerStyle}
      >
        {isLoading ? (
          <Contact phoneNumber="(415) 123-1234" name="nick" />
        ) : (
          <React.Fragment>
            {contacts.map(contact => {
              return (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  phoneNumber={contact.phone}
                />
              );
            })}
          </React.Fragment>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%"
  },
  scrollViewInnerStyle: {
    alignItems: "center"
  }
});

export default ContactList;
