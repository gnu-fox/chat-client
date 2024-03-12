import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

type Input = {
    text: string;
}

interface InitialState {
    map : { [id: string]: Input };
}

const initialState : InitialState = {
    map : {
        '1' : { text: 'Hello!' },
        '2' : { text: 'Hi!' },
        '3' : { text: 'How are you?' },
    }
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateMessageText: (state, action: PayloadAction<{ id: string; text: string }>) => {
            let { id, text } = action.payload;

            if (state.map[id]) {
                state.map[id].text = text;
            }
        },
    }
});

export const { updateMessageText } = inputSlice.actions;
export default inputSlice.reducer;