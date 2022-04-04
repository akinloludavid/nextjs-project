import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>home page</h1>
      <p className={styles.text}>lorem ipsum</p>
      <p className={styles.text}>Lorem ipsum</p>

      <Link href="/ninjas">
        <a className={styles.btn}>See ninja list</a>
      </Link>
    </div>
  );
}
