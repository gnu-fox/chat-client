import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Message = {
    contactId : string
    direction : 'incoming' | 'outgoing'
    text : string;
}

interface InitialState {
    list: Message[];
}

const initialState: InitialState = {
    list: [
        { contactId: "1", direction: "incoming", text: "Hello!" },
        { contactId: "1", direction: "outgoing", text: "Hi!" },
        { contactId: "2", direction: "incoming", text: "How are you?" },
        { contactId: "2", direction: "outgoing", text: "I'm fine, thanks!"},
        { contactId: "3", direction: "incoming", text: "What's up?" },
        { contactId: "3", direction: "outgoing", text: "Not much!" },
        { contactId: "2", direction: "incoming", text: "How are you?" },
        { contactId: "2", direction: "outgoing", text: "I'm fine, thanks!"},
        { contactId: "3", direction: "incoming", text: "What's up?" },
        { contactId: "3", direction: "outgoing", text: "Not much!" }
    ]
};

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<Message>) => {
            state.list.push(action.payload);
        }
    }
});

export const { sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;