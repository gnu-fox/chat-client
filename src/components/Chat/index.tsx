'use client'

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '@/store';

import { ContactList } from "./Contacts"; 
import { ConversationList } from "./Conversations";
import { MessageList } from "./Messages";
import { SenderForm } from "./Sender"; 

function Contacts({ onSelect } : { onSelect: (id: string) => void }) {
    const contacts = useSelector((state: RootState) => state.contacts.list);

    return <ContactList 
        contacts={contacts}
        onSelect={onSelect}
    />
}

function Conversations({ selected, onSelect } : { selected: string | null, onSelect: (id: string) => void }) {
    const conversations = useSelector((state: RootState) => state.conversations.map);
    const contacts = useSelector((state: RootState) => state.contacts.list);
    
    return <ConversationList 
        contacts={contacts.filter((contact) => conversations[contact.id])}
        selected={selected}
        onSelect={onSelect}
    />
}

function Messages({selected} : { selected: string }) {
    const messages = useSelector((state: RootState) => state.conversations.map);
    return <MessageList messages={messages[selected]} />

}

function Sender({selected} : { selected: string }) {
    const senders = useSelector((state: RootState) => state.sender.map);
    return <SenderForm sender={senders[selected]} />
}

export { Contacts, Conversations, Messages, Sender }