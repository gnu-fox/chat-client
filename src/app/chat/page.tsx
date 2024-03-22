'use client'

import React from "react";

import store from "@/store";
import { Provider } from "react-redux";
import { Container, Main, Header, Footer, Aside } from "@/app/chat/layout";
import { Contacts, Conversations, Messages, Sender, Bar } from "@/components/Chat"; 

export default function Chat () {
    const [selectedContact, setSelectedContact] = React.useState<string | null>(null);
    const [showContacts, setShowContacts] = React.useState<boolean>(true);

    return (
        <Provider store={store}>

            <Container>

                <Aside>

                    <Header>
                        <div>
                            <button onClick={() => setShowContacts(!showContacts)}>Toggle</button>
                        </div>
                    </Header>

                    { showContacts ? 
                        <Contacts onSelect={setSelectedContact} /> 
                    :   
                        <Conversations selected={selectedContact} onSelect={setSelectedContact} />
                    }

                </Aside>

                { selectedContact ? <Main>

                    <Header>

                        <Bar selected={selectedContact}/>

                    </Header>

                    <Messages selected={selectedContact} />

                    <Footer>
                        <Sender selected={selectedContact} />
                    </Footer>

                </Main> : null }

            </Container>

        </Provider>
    )
}