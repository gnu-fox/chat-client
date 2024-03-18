'use client'

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '@/store'
import { updateMessageText } from "@/store/inputsSlice"
import { sendMessage } from "@/store/conversationsSlice"

import { ContactList } from "./Contacts"
import { ConversationList } from "./Conversations"
import { MessageList } from "./Messages"
import { SenderForm } from "./Sender"

type Message = {
    direction: 'incoming' | 'outgoing'
    text: string;
}

function Contacts({ onSelect } : { onSelect: (id: string) => void }) {
    const contacts = useSelector((state: RootState) => state.contacts.list)

    return <ContactList 
        contacts={contacts}
        onSelect={onSelect}
    />
}

function Conversations({ selected, onSelect } : { selected: string | null, onSelect: (id: string) => void }) {
    const conversations = useSelector((state: RootState) => state.conversations.map)
    const contacts = useSelector((state: RootState) => state.contacts.list)
    const messages = useSelector((state: RootState) => state.conversations.map)

    let lastest = new Map<string, Message>();

    Object.keys(messages).forEach((key) => {
        let message = messages[key];
        lastest.set(key, message[message.length - 1])
    });

    return <ConversationList 
        contacts={contacts.filter((contact) => conversations[contact.id])}
        selected={selected}
        onSelect={onSelect}
        lastest={lastest}
    />
}

function Messages({selected} : { selected: string }) {
    const messages = useSelector((state: RootState) => state.conversations.map);
    return <MessageList messages={messages[selected]} />

}

function Sender({selected} : { selected: string }) {
    const dispatch = useDispatch()
    const inputs = useSelector((state: RootState) => state.inputs.map)
    const messages = useSelector((state: RootState) => state.conversations.map)

    let input = inputs[selected];

    const onSend = (message: Message) => {
        dispatch(sendMessage({id: selected, message}))
        dispatch(updateMessageText({id: selected, text: ''}))
    }

    return <SenderForm
        input={input}
        onChange={(text) => dispatch(updateMessageText({id: selected, text}))}
        onSend={onSend}
    />
}

export { Contacts, Conversations, Messages, Sender }