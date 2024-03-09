import React from "react";

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

interface Messages {
    messages: Message[];
}

const MessageItem = ({ message }: { message: Message }) => (
    <li>{message.text}</li>
);

const MessageList = ({ messages }: Messages) => (
    <ul>
        {messages.map((message) => (
            <MessageItem message={message} />
        ))}
    </ul>
);

export { MessageItem, MessageList }