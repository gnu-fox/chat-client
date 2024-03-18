import React from "react";
import "./Sender.css";

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
    <form onSubmit={(event) => {
        event.preventDefault();
        onSend({ direction: 'outgoing', text: input.text });
    }}>
        <div className="sender-form-container">
            <input 
                type='text' 
                className="sender-input"
                value={input.text} 
                onChange={(e) => onChange(e.target.value)}
            />
            <button type="submit" className="sender-button">Send</button>
        </div>
    </form>
);

export { SenderForm };