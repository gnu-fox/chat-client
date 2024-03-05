'use client';

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type Conversation = {
    contactId: string;   
}

const ConversationItem = ({ conversation }: { conversation: Conversation }) => (
    <li>{conversation.contactId}</li>
);

const ConversationList = ({ conversations }: { conversations: Conversation[] }) => (
    <ul>
        {conversations.map((conversation) => (
            <ConversationItem conversation={conversation} />
        ))}
    </ul>
);

const Conversations = () => {
    const conversations = useSelector((state: RootState) => state.conversations.list);
    return (
        <ConversationList conversations={conversations} />
    )
}