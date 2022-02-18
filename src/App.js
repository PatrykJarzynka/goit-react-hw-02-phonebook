import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = { name: name, number: number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts], name: '', number: '' }));
  };

  handleFilter = event => {
    const value = event.target.value;
    this.setState({[event.target.name]: value });
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
        <ContactList list={this.state.contacts} filter={this.state.filter}></ContactList>
      </div>
    );
  }
}

export default App;
