import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "./inputsSlice";
import contactsReducer from "./contactsSlice";
import conversationsReducer from "./conversationsSlice";
import activityReducer from "./activitySlice"
import profileReducer from "./profileSlice"

const store = configureStore({
    reducer: {
        inputs: inputsReducer,
        activity: activityReducer,
        contacts: contactsReducer,
        profiles: profileReducer,
        conversations: conversationsReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>