import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
    id: string;
    name: string;
    avatar: string;
}

interface InitialState {
    list: Contact[];
}

const initialState: InitialState = {
    list: [
        { id: "1", name: "John Doe", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "2", name: "Jane Doe", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "3", name: "John Smith", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "4", name: "Jane Smith", avatar: "http://www.gravatar.com/avatar/?d=identicon" },
        { id: "5", name: "John Johnson", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "6", name: "Jane Johnson", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "7", name: "John Brown", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "8", name: "Jane Brown", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "9", name: "John White", avatar: "http://www.gravatar.com/avatar/?d=identicon"  },
        { id: "10", name: "Jane White", avatar: "http://www.gravatar.com/avatar/?d=identicon"  }
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