import Link from "next/link";
import Head from "next/head";
import styles from './main-layout.module.scss';

export const MainLayout = ({ children, title = 'Home' }) => (
    <>
        <Head>
            <title>Twitch | {title}</title>
        </Head>
        <header className={styles.header}>
            <nav className={styles.container}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/favorite">
                            <a>Favorite</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    </>
);
