'use client'

import React from "react";

import store from "@/store";
import { Provider } from "react-redux";
import { Container, Main, Header, Footer, Aside } from "@/app/chat/layout";
import { Contacts, Conversations, Messages, Sender } from "@/components/Chat"; 

export default function Chat () {
    const [selectedContact, setSelectedContact] = React.useState<string | null>(null);

    return (
        <Provider store={store}>

            <Container>

                <Aside>

                    <Header>
                        <h1>Settings</h1>
                    </Header>

                    <Conversations selected={selectedContact} onSelect={setSelectedContact} />

                </Aside>

                { selectedContact ? <Main>

                    <Header>

                        <h1>Chat</h1>

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