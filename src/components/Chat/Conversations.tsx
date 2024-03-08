import React from "react";

type Contact = {
    id: string;
    name: string;
};

const ConversationItem = ({ contact }: { contact: Contact }) => (
    <li>{contact.name}</li>
);

const ConversationList = ({ contacts }: { contacts: Contact[] }) => (
    <ul>
        {contacts.map((contact) => (
            <ConversationItem contact={contact} />
        ))}
    </ul>
);

export { ConversationItem, ConversationList }