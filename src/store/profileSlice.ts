import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profile } from "console";

type Profile = {
    avatar: string;
    firstName: string;
}

interface InitialState {
    map : { [id: string] : Profile }
}

const initialState : InitialState = {
    map : {
        "1": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "2": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "3": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "4": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "5": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "6": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "7": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "8": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "9": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
        "10": { avatar: "http://www.gravatar.com/avatar/?d=identicon", firstName: "UserName" } ,
    }
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export default profileSlice.reducer;