import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "karenSmith@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Jack Walker",
        email: "jwalk@gmail.com",
        phone: "222-222-2222"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
