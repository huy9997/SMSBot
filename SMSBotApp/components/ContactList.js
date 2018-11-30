import React, { Component } from "react";
import { ScrollView } from "react-native";
import Contact from "./Contact";

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
      <ScrollView>
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

export default ContactList;
