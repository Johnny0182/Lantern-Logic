import Link from 'next/link';
import styles from '@/styles/Landing.module.css';

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.canvas} aria-hidden>
        <div className={styles.sunset} />
        <div className={styles.grid} />
        <div className={styles.inkStroke} />
        <div className={styles.photoFrame}>
          <div className={styles.photoOne} />
          <div className={styles.photoTwo} />
        </div>
      </div>
      <section className={styles.card}>
        <p className={styles.kicker}>Lantern Studio Presents</p>
        <h1 className={styles.title}>
          Lantern <span>+</span> Logic <em>🏮</em>
        </h1>
        <p className={styles.subtitle}>
          A modern technology review tracking policy, product, and cultural shifts with longform reporting and quick-hit signal
          pulses. Stay a minute in the lounge, then step into the journal.
        </p>
        <div className={styles.metaGrid}>
          <div>
            <h2>Inside this issue</h2>
            <ul>
              <li>Frontier compute and resilient infrastructure</li>
              <li>Networked climate systems and spatial robotics</li>
              <li>Intelligence briefings for founders and operators</li>
            </ul>
          </div>
          <div>
            <h2>Updated weekly</h2>
            <p>Curated by Lantern Studio. Featuring reporting, interviews, and dispatches from global contributors.</p>
          </div>
        </div>
        <Link href="/blog" className={styles.enterButton}>
          Enter the review
        </Link>
        <div className={styles.footer}>
          <span>© {new Date().getFullYear()} Lantern + Logic</span>
          <span>Technology, culture, and strategy at human scale.</span>
        </div>
      </section>
    </main>
  );
}
