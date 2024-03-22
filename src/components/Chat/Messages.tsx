import React from "react";
import './Messages.css';

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

function messageClass(message : Message): string {
    return `message ${message.direction}`;
};

const MessageItem = ({ message }: { message: Message }) => (
    <li className={messageClass(message)}>{message.text}</li>
);

const MessageList = ({ messages }: { messages: Message[]}) => (
    <ul className='list'>
        {messages.map((message) => (
            <MessageItem message={message} />
        ))}
    </ul>
);

export { MessageItem, MessageList }