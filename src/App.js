import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = key => {
    this.setState(state => ({ contacts: state.contacts.filter(contact => contact.id !== key) }));
  };

  addContact = (name, number) => {
    const contact = { name: name, number: number, id: nanoid() };
    const foundContant = this.state.contacts.find(contact => contact.name === name);
    if (foundContant) {
      alert(name + ' is already in contacts');
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts], name: '', number: '' }));
  };

  handleFilter = event => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={this.state.name}
          number={this.state.number}
          onSubmit={this.addContact}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilter}></Filter>
        <ContactList
          list={this.state.contacts}
          filter={this.state.filter}
          onClick={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
