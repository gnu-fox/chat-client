import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Activity = {
    isOnline : boolean;
    lastTime : string;
    writting : boolean;
}

interface InitialState {
    map: { [id: string]: Activity };
}

const initialState: InitialState = {
    map: {
        "1": {isOnline: false, lastTime: "today", writting: false },
        "2": {isOnline: false, lastTime: "today", writting: false },
        "3": {isOnline: false, lastTime: "today", writting: false },
        "4": {isOnline: false, lastTime: "today", writting: false },
        "5": {isOnline: false, lastTime: "today", writting: false },
        "6": {isOnline: false, lastTime: "today", writting: false },
        "7": {isOnline: false, lastTime: "today", writting: false },
        "8": {isOnline: false, lastTime: "today", writting: false },
        "9": {isOnline: false, lastTime: "today", writting: false },
        "10": {isOnline: false, lastTime: "today", writting: false }
    }
};

const activitySlice = createSlice ({
    name: "activity",
    initialState,
    reducers: {
        
    }
})

export default activitySlice.reducer;