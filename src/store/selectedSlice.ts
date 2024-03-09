import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    id: string | null;
}

const initialState : InitialState = {
    id: null
};

const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        selectContact(state, action: PayloadAction<string>) {
            state.id = action.payload;
        }
    }
});

export const { selectContact } = selectedSlice.actions;
export default selectedSlice.reducer;