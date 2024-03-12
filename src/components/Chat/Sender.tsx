import React from "react";

type Input = {
    text: string;
}

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

interface Sender {
    input: Input;
    onChange: (text: string) => void;
    onSend: (message: Message) => void;
}

const SenderForm = ({ input, onChange, onSend }: Sender) => (
    <input 
        type='text' 
        value={input.text} 
        onChange={(e) => onChange(e.target.value)}
        onSubmit={(event) => {
            onSend({ direction: 'outgoing', text: input.text }); event.preventDefault();
        }}
    />
);

export { SenderForm };