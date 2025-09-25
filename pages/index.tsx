import Link from 'next/link';
import styles from '@/styles/Landing.module.css';

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.eye}>SEE</div>
        <div className={styles.sketchWrap}>
          <div className={styles.sketch} aria-hidden />
        </div>
        <h1 className={styles.title}>
          Lantern <span className={styles.plus}>+</span> Logic <span className={styles.lantern}>🏮</span>
        </h1>
        <p className={styles.subtitle}>
          A curated stream of bright ideas, culture riffs, and the tech that&apos;s remaking tomorrow.
          Step inside and stay awhile.
        </p>
        <Link href="/blog" className={styles.enterButton}>
          Enter
        </Link>
        <p className={styles.footerNote}>Copyright 2024 Lantern Logic Studio</p>
      </div>
    </main>
  );
}
