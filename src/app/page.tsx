import Link from "next/link"
import { invoke } from "./blitz-server"
import { LogoutButton } from "./(auth)/components/LogoutButton"
import styles from "./styles/Home.module.css"
import getCurrentUser from "./users/queries/getCurrentUser"

export default async function Home() {
    const currentUser = await invoke(getCurrentUser, null)
    return (
        <>
            <div className={styles.globe} />
            <div className={styles.container}>

                <main className={styles.main}>
                    <div className={styles.wrapper}>
                        <div className={styles.header}>

                            <h1>My second database & authentication is ready. Lets try it</h1>

                            {/* Auth */}

                            <div className={styles.buttonContainer}>
                                {currentUser ? (
                                    <>
                                        <LogoutButton />
                                        <div>
                                            User id: <code>{currentUser.id}</code>
                                            <br />
                                            User role: <code>{currentUser.role}</code>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/signup" className={styles.button}>
                                            <strong>Sign Up</strong>
                                        </Link>
                                        <Link href="/login" className={styles.loginButton}>
                                            <strong>Login</strong>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className={styles.body}>
                            {/* <div className={styles}></div> */}
                        </div>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <span>Powered by Liza and Leha</span>
                </footer>
            </div>
        </>
    )
}
