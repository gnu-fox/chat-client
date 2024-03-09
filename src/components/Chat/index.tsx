'use client';

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { selectContact } from '@/store/selectedSlice';

import { ContactList } from './Contacts';
import { ConversationList } from './Conversations';
import { MessageList } from './Messages'; 

const Contacts = () => {
    const contacts = useSelector((state: RootState) => state.contacts.list);
    return (
        <ContactList contacts={contacts} />
    )
};

const Conversations = () => {
    const conversations = useSelector((state: RootState) => state.conversations.map);
    const contacts = useSelector((state: RootState) => state.contacts.list);

    const dispatch = useDispatch();
    const selected = useSelector((state: RootState) => state.selected.id);
    const onSelect = (id: string) => dispatch(selectContact(id));
    
    return (
        <ConversationList 
            contacts={contacts.filter((contact) => conversations[contact.id])}
            selected={selected}
            onSelect={onSelect}
        />
    )
}

const Messages = () => {
    const messages = useSelector((state: RootState) => state.conversations.map);
    const selected = useSelector((state: RootState) => state.selected.id);

    return selected ? (
        <MessageList messages={messages[selected]} />
    ) : null
}

export { Contacts, Conversations, Messages };