'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { ContactList } from './Contacts';
import { ConversationList } from './Conversations';
import { MessageList } from './Messages'; 

const Contacts = () => {
    let contacts = useSelector((state: RootState) => state.contacts.list);
    return (
        <ContactList contacts={contacts} />
    )
};

const Conversations = () => {
    let conversations = useSelector((state: RootState) => state.conversations.map);
    let contacts = useSelector((state: RootState) => state.contacts.list);
    
    return (
        <ConversationList contacts={contacts.filter((contact) => conversations[contact.id])} />
    )
}

const Messages = () => {
    let messages = useSelector((state: RootState) => state.conversations.map);
    let selected = useSelector((state: RootState) => state.selected.id);

    return selected ? (
        <MessageList messages={messages[selected]} />
    ) : null
}

export { Contacts, Conversations, Messages };