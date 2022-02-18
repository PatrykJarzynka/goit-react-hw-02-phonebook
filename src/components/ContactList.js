import { nanoid } from 'nanoid';
import Button from './Button';

function ContactList({ list, filter, onClick }) {
  let contacts = list
    .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    .map(contact => (
      <li key={nanoid()}>
        {contact.name}:{contact.number}
        <Button type="button" label="Delete" onClick={() => onClick(contact.id)}></Button>
      </li>
    ));

  return <ul>{contacts}</ul>;
}

export default ContactList;
