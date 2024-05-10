'use client'

import styles from "./page.module.css";
import React from "react";

import store from "@/store";
import { Provider } from "react-redux";
import { Contacts, Conversations, Messages, Sender, Bar } from "@/components/Chat"; 

export default function Chat () {
    const [selectedContact, setSelectedContact] = React.useState<string | null>(null);
    const [showContacts, setShowContacts] = React.useState<boolean>(true);

    return (

        <Provider store={store}>

            <div className={styles.container}>

                <aside className={styles.aside}>

                    <header className={styles.header}>

                        <div>
                            <button onClick={() => setShowContacts(!showContacts)}>Toggle</button>
                        </div>
                    
                    </header>

                    { showContacts ? 
                        <Contacts onSelect={setSelectedContact} /> 
                    :   
                        <Conversations selected={selectedContact} onSelect={setSelectedContact} />
                    }

                </aside>

                { selectedContact ? <main className={styles.main}>

                    <header className={styles.header}>

                        <Bar selected={selectedContact}/>

                    </header>

                    <Messages selected={selectedContact} />

                    <footer className={styles.footer}>
                        <Sender selected={selectedContact} />
                    </footer>

                </main> : null }

            </div>

        </Provider>
    )
}