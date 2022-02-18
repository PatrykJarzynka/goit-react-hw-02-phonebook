import { nanoid } from 'nanoid';

function ContactList({ list, filter }) {
  let contacts = list
    .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    .map(contact => (
      <li key={nanoid()}>
        {contact.name}:{contact.number}
      </li>
    ));
  

  return <ul>{contacts}</ul>;
}

export default ContactList;
