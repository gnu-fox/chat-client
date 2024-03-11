import React from "react";

type Contact = {
    id: string;
    name: string;
};

const ConversationItem = ({ contact, selected, onSelect }: { contact: Contact, selected: string | null, onSelect: (id: string) => void }) => (
    <li>{contact.name}</li>
);

const ConversationList = ({ contacts, selected, onSelect }: { contacts: Contact[], selected: string | null, onSelect: (id: string) => void }) => (
    <ul>
        {contacts.map((contact) => (
            <ConversationItem contact={contact} selected={selected} onSelect={onSelect} />
        ))}
    </ul>
);

export { ConversationItem, ConversationList }