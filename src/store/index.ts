import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./selectedSlice";
import contactsReducer from "./contactsSlice";
import conversationsReducer from "./conversationsSlice";

const store = configureStore({
    reducer : {
        selected : selectedReducer,
        contacts : contactsReducer,
        conversations : conversationsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>