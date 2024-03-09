import React from "react";

interface Sender {
    text: string;
}

const SenderInput = () => (
    <input type = "text" />
);

const SenderButton = () => (
    <button>Send</button>
);

const SenderForm = ({ text } : Sender) => (
    <form>
        <SenderInput />
        <SenderButton />
    </form>
);

export { SenderForm };