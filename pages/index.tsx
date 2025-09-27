import Link from 'next/link';
import styles from '@/styles/Landing.module.css';

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden>
        <div className={styles.vignette} />
        <div className={styles.scanlines} />
        <div className={styles.glowOrbit} />
        <div className={styles.glowPulse} />
      </div>
      <section className={styles.lounge}>
        <div className={styles.badge}>Waiting Room</div>
        <h1 className={styles.title}>
          Lantern <span>+</span> Logic <em>🌐</em>
        </h1>
        <p className={styles.subtitle}>
          Plug into the neural lounge while the feed calibrates. Ride the ambient loop, then step through to the
          technologist&apos;s salon.
        </p>
        <div className={styles.statusPanel}>
          <div className={styles.signalLabel}>Signal strength</div>
          <div className={styles.signalBar}>
            <span className={styles.signalMeter} />
          </div>
          <p className={styles.statusText}>Channel aligned · next gate unlocks in 3... 2... 1...</p>
        </div>
        <Link href="/blog" className={styles.enterButton}>
          <span className={styles.enterLabel}>Enter the Circuit</span>
          <span className={styles.enterIcon} aria-hidden>
            ⇲
          </span>
        </Link>
        <div className={styles.footer}>
          <span>Lantern Logic Studio © 2024</span>
          <span>Curated tech futures &amp; trend dispatches</span>
        </div>
      </section>
    </main>
  );
}
