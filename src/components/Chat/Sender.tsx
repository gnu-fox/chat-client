import React from "react";

type Sender = {
    text: string;
}

const SenderInput = () => (
    <input type = "text" />
);

const SenderButton = () => (
    <button>Send</button>
);

const SenderForm = ({ sender }: { sender: Sender }) => (
    <form>
        <SenderInput />
        <SenderButton />
    </form>
);

export { SenderForm };