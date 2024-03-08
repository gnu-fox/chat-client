import React from 'react';

type Contact = {
    id: string;
    name: string;
};

const ContactItem = ({ contact }: { contact: Contact }) => (
    <li>{contact.name}</li>
);

const ContactList = ({ contacts }: { contacts: Contact[] }) => (
    <ul>
        {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
);

export { ContactItem, ContactList };