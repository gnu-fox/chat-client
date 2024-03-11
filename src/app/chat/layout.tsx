import React from "react";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.container}>
        {children}
    </div>
);

const Main = ({ children }: { children: React.ReactNode }) => (
    <main className={styles.main}>
        {children}
    </main>
);

const Header = ({ children }: { children: React.ReactNode }) => (
    <header className={styles.header}>
        {children}
    </header>
);

const Footer = ({ children }: { children: React.ReactNode }) => (
    <footer className={styles.footer}>
        {children}
    </footer>
);

const Aside = ({ children }: { children: React.ReactNode }) => (
    <aside className={styles.aside}>
        {children}
    </aside>
);

const Layout = ({ children } : { children : React.ReactNode }) => (
    <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
    </html>
)

export { Container, Main, Header, Footer, Aside };
export default Layout;