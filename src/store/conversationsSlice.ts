import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Message = {
    direction: 'incoming' | 'outgoing';
    text: string;
}

interface InitialState {
    map: { [id: string]: Message[] };
}

const initialState: InitialState = {
    map: {
        "1": [
            { direction: "incoming", text: "Hello!" },
            { direction: "outgoing", text: "Hi!" }
        ],
        "2": [
            { direction: "incoming", text: "How are you?" },
            { direction: "outgoing", text: "I'm fine, thanks!" },
            { direction: "incoming", text: "How are you?" },
            { direction: "outgoing", text: "I'm fine, thanks!" }
        ],
        "3": [
            { direction: "incoming", text: "What's up?" },
            { direction: "outgoing", text: "Not much!" },
            { direction: "incoming", text: "What's up?" },
            { direction: "outgoing", text: "Not much!" }
        ]
    }
};

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<{ contactId: string; message: Message }>) {
            const { contactId, message } = action.payload;
            state.map[contactId].push(message);
        }
    }
});

export const { addMessage } = conversationsSlice.actions;
export default conversationsSlice.reducer;