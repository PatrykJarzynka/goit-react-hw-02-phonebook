
import { nanoid } from 'nanoid';

function ContactList({ list }) {

    let xd = list.map(contact => (<li key={nanoid()}>{contact}</li>))
    
    return (<ul>
        {xd}
    </ul>);}

export default ContactList;