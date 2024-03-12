import React from "react";
import './Conversations.css';

type Contact = {
    id: string;
    name: string;
};

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

interface Conversation {
    contact: Contact;
    selected: string | null;
    onSelect: (id: string) => void;
    lastest: Message;
}

function conversationClass(contact: Contact, selected: string | null): string {
    return `conversation-item ${contact.id === selected ? 'selected' : ''}`;
}

const ConversationItem = ({ contact, selected, onSelect, lastest}: Conversation) => (
    <li className={conversationClass(contact, selected)} onClick={()=>onSelect(contact.id)}>
        <p className='contact-name'>{contact.name}</p>
        <p className='last-message'>{lastest.text}</p>
    </li>
);

interface Conversations {
    contacts: Contact[];
    selected: string | null;
    onSelect: (id: string) => void;
    lastest: Map<string, Message>;
}

const ConversationList = ({ contacts, selected, onSelect, lastest}: Conversations) => (
    <ul className='conversation-list'>
        {contacts.map((contact) => (
            <ConversationItem 
                key={contact.id} 
                contact={contact} 
                selected={selected} 
                onSelect={onSelect} 
                lastest={lastest.get(contact.id) || { direction: 'outgoing', text: '' }}
            />
        ))}
    </ul>
);

export { ConversationItem, ConversationList }