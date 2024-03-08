import Image from "next/image";
import styles from "./page.module.css";

import { Context } from "@/app/context";
import { Messages, Contacts, Conversations } from "@/components/Chat";

export default function Home() {
    return (
        <Context>
            <main className={styles.main}>
                <Messages />
            </main>
        </Context>
    );
}