import React from "react";

type Contact = {
    id: string;
    name: string;
};

interface Conversations {
    contacts: Contact[];
    selected: string | null;
    onSelect: (id: string) => void;
}

const ConversationItem = ({ contact }: { contact: Contact }) => (
    <li>{contact.name}</li>
);

const ConversationList = ({ contacts, selected, onSelect } : Conversations) => (
    <ul>
        {contacts.map((contact) => (
            <ConversationItem contact={contact} />
        ))}
    </ul>
);

export { ConversationItem, ConversationList }