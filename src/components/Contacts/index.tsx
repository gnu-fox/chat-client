'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';

type Contact = {
    id: string;
    name: string;
}

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

const Contacts = () => {
    const contacts = useSelector((state: RootState) => state.contacts.list);
    return (
        <ContactList contacts={contacts} />
    )
};

export type { Contact };
export { Contacts };