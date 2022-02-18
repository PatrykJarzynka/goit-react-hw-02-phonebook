import { Component } from 'react';
import Button from './Button';
import Name from './Name';
import Number from './Number';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>Name</span>
        <Name type="text" value={this.state.name} onChange={this.handleChange}></Name>
        <span>Number</span>
        <Number type="tel" number={this.state.number} onChange={this.handleChange}></Number>
        <Button type="submit" label={'Add contact'}></Button>
      </form>
    );
  }
}

export default ContactForm;
