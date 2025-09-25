import Link from 'next/link';
import styles from '@/styles/BlogHeader.module.css';

export default function BlogHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link href="/blog">
          <span className={styles.logo}>Lantern Logic</span>
        </Link>
        <p className={styles.tagline}>Tech, design, and climate stories for the curious.</p>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/blog#features">Features</Link>
        <Link href="/blog#signals">Signals</Link>
        <Link href="/blog#dispatches">Dispatches</Link>
      </nav>
    </header>
  );
}
