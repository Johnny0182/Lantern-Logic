import Link from 'next/link';
import styles from '@/styles/BlogHeader.module.css';

export default function BlogHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <Link href="/blog">
          <span className={styles.logo}>Lantern + Logic 🌐</span>
        </Link>
        <p className={styles.tagline}>Tech intelligence for builders, analysts, and trend spotters.</p>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/blog#spotlight">Spotlight</Link>
        <Link href="/blog#features">Top Stories</Link>
        <Link href="/blog#dispatches">Dispatches</Link>
        <Link href="/blog#signals">Signals</Link>
      </nav>
    </header>
  );
}
