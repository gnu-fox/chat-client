import React from "react";

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

const MessageItem = ({ message }: { message: Message }) => (
    <li>{message.text}</li>
);

const MessageList = ({ messages }: { messages: Message[] }) => (
    <ul>
        {messages.map((message) => (
            <MessageItem message={message} />
        ))}
    </ul>
);

export { MessageItem, MessageList }