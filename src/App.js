import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </div>
    );
  }
}

export default App;
