import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
    id: string;
    name: string;
}

interface InitialState {
    list: Contact[];
}

const initialState: InitialState = {
    list: [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Doe" },
        { id: "3", name: "John Smith" }
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.list.push(action.payload);
        }
    }
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;