import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Conversation = {
    contactId: string;   
}

interface InitialState {
    list: Conversation[];
}

const initialState: InitialState = {
    list: [
        { contactId: "1" },
        { contactId: "2" },
        { contactId: "3" }
    ]
};

const conversationsSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {
        addConversation: (state, action: PayloadAction<Conversation>) => {
            state.list.push(action.payload);
        }
    }
});

export const { addConversation } = conversationsSlice.actions;
export default conversationsSlice.reducer;