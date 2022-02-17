import { nanoid } from 'nanoid';

function ContactList({ list }) {
  let contacts = list.map(contact => <li key={nanoid()}>{contact}</li>);

    
  return <ul>{contacts}</ul>;
}

export default ContactList;
