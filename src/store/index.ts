import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "./inputsSlice";
import contactsReducer from "./contactsSlice";
import conversationsReducer from "./conversationsSlice";

const store = configureStore({
    reducer: {
        inputs: inputsReducer,
        contacts: contactsReducer,
        conversations: conversationsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>