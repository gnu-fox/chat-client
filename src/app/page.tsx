import Image from "next/image";
import styles from "./page.module.css";

import { Contacts } from "@/components/Contacts";
import { Context } from "@/app/context";

export default function Home() {
    return (
        <Context>
            <main className={styles.main}>
                <Contacts />
            </main>
        </Context>
    );
}