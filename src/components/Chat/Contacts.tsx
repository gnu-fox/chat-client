import React from 'react';
import './Contacts.css';

type Contact = {
    id: string;
    name: string;
};

const ContactItem = ({ contact, onSelect }: { contact: Contact, onSelect : (id : string) => void }) => (
    <li className='contact-item-container' onClick={() => onSelect(contact.id)} >
        <img className='contact-thumbnail' src="http://www.gravatar.com/avatar/?d=identicon"/>
        <div className='contact-item'>
            <p className='contact-name'>{contact.name}</p>
        </div>    
    </li>
);

const ContactList = ({ contacts, onSelect }: { contacts: Contact[], onSelect : (id : string) => void } ) => (
    <ul className='contact-list'>
        {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onSelect={onSelect}/>
        ))}
    </ul>
);

export { ContactItem, ContactList };