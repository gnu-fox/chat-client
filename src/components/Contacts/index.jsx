'use client';

import { useSelector } from 'react-redux';
import React from 'react';
import { Contact } from '@/store/contactsSlice';

const ContactItem = ({ contact }) => (
    <li>{contact.name}</li>
);

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(contact => (
            <ContactItem contact={contact} />
        ))}
    </ul>
);

const Contacts = () => {
    const contacts = useSelector((state) => state.contacts.list);
    return (
        <ContactList contacts={contacts} />
    );
};

export { Contacts };