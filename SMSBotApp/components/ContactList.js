import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import Contact from "./Contact";

// see if i should make this into a functional component
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item }) => {
    return (
      <Contact
        key={item.id}
        name={item.fullName}
        phoneNumber={item.phoneNumber}
        phoneNumberLabel={item.label}
      />
    );
  };

  keyExtractor = (contacts, index) => {
    return `${index}`;
  };

  render() {
    const { contacts } = this.props;

    return (
      <FlatList
        style={styles.mainContainer}
        data={contacts}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default ContactList;
