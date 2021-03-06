import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";

export default function Home() {
    const { isAuthenticated, logout } = useMoralis();
    if (!isAuthenticated) return <Login />;
    return (
        <div className="h-screen">
            <Head>
                <title>Chap App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Welcome to the App</h1>
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
}
