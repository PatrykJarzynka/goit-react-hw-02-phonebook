import './App.css';
import React, { Component } from 'react';
import Section from './components/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <Section title="Phonebook"></Section>
  }
}

export default App;
