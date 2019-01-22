import React, { Component } from "react";
import getContactsData from "../functions/getContactsData";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: state.contacts
      };
    default:
      return state;
  }
};

// async storage - user id and is logged in

// events - get all events associated with their user id

// contacts get contacts off phone ask for permission

// event details - get the most recent message that have the same userID as user and eventID as the event looked at

// specific message from event - get all the messages that have the same name and eventID of the event pressed and userID of the user

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      events: [],
      messages: [],
      isLoading: true,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  componentDidMount() {
    this.extractContactsData();
  }

  extractContactsData = () => {
    getContactsData()
      .then(({ data }) => {
        let contacts = [];

        data.forEach(contact => {
          let newContact;

          for (let phone of contact.phoneNumbers) {
            newContact = {
              id: contact.id,
              firstName: contact.firstName,
              lastName: contact.lastName,
              fullName: contact.name,
              label: phone.label,
              phoneNumber: phone.number
            };

            contacts.push(newContact);
          }
        });
        this.setState({ contacts });
      })
      .catch(error => console.log(error));
  };

  // getEvents = async () => {
  //   this.setState({ isLoading: true });
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const responseJson = await response.json();
  //   this.setState({ events: responseJson, isLoading: false });
  // };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
