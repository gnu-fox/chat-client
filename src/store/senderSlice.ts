import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { addMessage } from "./conversationsSlice";

type Sender = {
    text: string;
}

interface InitialState {
    map : { [id: string]: Sender };
}

const initialState : InitialState = {
    map : {
        '1' : { text: 'Hello!' },
        '2' : { text: 'Hi!' },
        '3' : { text: 'How are you?' },
    }
}

const senderSlice = createSlice({
    name: 'sender',
    initialState,
    reducers: {
        updateMessageText: (state, action: PayloadAction<{ id: string; text: string }>) => {
            let { id, text } = action.payload;

            if (state.map[id]) {
                state.map[id].text = text;
            }
        },

        sendMessage: (state, action: PayloadAction<{id: string}>) => {
            let { id } = action.payload;

            if (state.map[id]) {
                console.log(`Sending message: ${state.map[id].text}`);

                addMessage({ id, message: {
                    direction: 'outgoing',
                    text: state.map[id].text } 
                });
            }

            state.map[id].text = '';
        }
    }
});

export const { updateMessageText, sendMessage } = senderSlice.actions;
export default senderSlice.reducer;