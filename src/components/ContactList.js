import { nanoid } from 'nanoid';
import Button from './Button';
import styled from '@emotion/styled';

const FancyList = styled.ul({
  fontWeight: 500,
});

function ContactList({ list, filter, onClick }) {
  let contacts = list
    .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    .map(contact => (
      <li key={nanoid()}>
        {contact.name}:{contact.number}
        <Button type="button" label="Delete" onClick={() => onClick(contact.id)}></Button>
      </li>
    ));

  return <FancyList>{contacts}</FancyList>;
}

export default ContactList;
