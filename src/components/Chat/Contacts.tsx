import React from 'react';

type Contact = {
    id: string;
    name: string;
};

const ContactItem = ({ contact, onSelect }: { contact: Contact, onSelect : (id : string) => void }) => (
    <li>{contact.name}</li>
);

const ContactList = ({ contacts, onSelect }: { contacts: Contact[], onSelect : (id : string) => void } ) => (
    <ul>
        {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onSelect={onSelect}/>
        ))}
    </ul>
);

export { ContactItem, ContactList };