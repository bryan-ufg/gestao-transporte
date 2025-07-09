import Image from "next/image";
import styles from "./page.module.css";
import { metadata } from "./layout";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/tabocao.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>
          <h1>{String(metadata.title)}</h1>
        </div>

        <div className={styles.ctas}>
          <h3>{metadata.description}</h3>
        </div>
      </main>
    </div>
  );
}
