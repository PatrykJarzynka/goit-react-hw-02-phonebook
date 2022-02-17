import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    this.state.contacts.push(this.state.name);
    this.setState({ name: '' });
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={this.state.name}
          onSubmit={this.addContact}
          onChange={this.handleChange}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList list={this.state.contacts}></ContactList>
      </div>
    );
  }
}

export default App;
