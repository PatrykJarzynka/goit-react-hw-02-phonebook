import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = event => {
    event.preventDefault();
    const contact = { name: this.state.name, number: this.state.number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts], name: '', number: '' }));
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  contactFilter = () => {};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={this.state.name}
          number={this.state.number}
          onSubmit={this.addContact}
          onChange={this.handleChange}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange}></Filter>
        <ContactList list={this.state.contacts} filter = {this.state.filter}></ContactList>
      </div>
    );
  }
}

export default App;
