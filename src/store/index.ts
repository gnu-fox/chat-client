import { configureStore } from "@reduxjs/toolkit";
import senderReducer from "./senderSlice";
import contactsReducer from "./contactsSlice";
import conversationsReducer from "./conversationsSlice";

const store = configureStore({
    reducer: {
        sender: senderReducer,
        contacts: contactsReducer,
        conversations: conversationsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>