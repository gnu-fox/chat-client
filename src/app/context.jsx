'use client'
import store from "@/store";
import { Provider } from "react-redux";

const Context = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export { Context };