import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import conversationsReducer from "./conversationsSlice";
import messagesReducer from "./messagesSlice";

const store = configureStore({
    reducer : {
        contacts : contactsReducer,
        conversations : conversationsReducer,
        messages : messagesReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>