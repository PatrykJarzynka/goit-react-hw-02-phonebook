import { nanoid } from 'nanoid';

function ContactList({ list, filter }) {
  let contacts = list.map(contact => (
    <li key={nanoid()}>
      {contact.name}:{contact.number}
    </li>
  ));

  return <ul>{contacts}</ul>;
}

export default ContactList;
