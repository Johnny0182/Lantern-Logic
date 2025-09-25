import Head from 'next/head';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import styles from '@/styles/BlogIndex.module.css';
import { posts } from '@/lib/posts';

const heroPost = posts.find((post) => post.mood === 'hero');
const featurePosts = posts.filter((post) => post.mood === 'feature');
const quickPosts = posts.filter((post) => post.mood === 'quick');

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Lantern Logic Journal — Future-facing essays & signals</title>
        <meta
          name="description"
          content="Lantern Logic Journal blends design culture, climate tech, and speculative futures in a modern magazine layout inspired by MIT Technology Review."
        />
      </Head>
      <div className={styles.wrapper}>
        <BlogHeader />
        <main className={styles.main}>
          {heroPost && (
            <article className={styles.hero} style={{ backgroundImage: heroPost.gradient }}>
              <div className={styles.heroInner}>
                <span className={styles.pill}>{heroPost.category}</span>
                <Link href={`/blog/${heroPost.slug}`} className={styles.heroLink}>
                  <h1>{heroPost.title}</h1>
                </Link>
                <p>{heroPost.excerpt}</p>
                <div className={styles.metaRow}>
                  <span>{heroPost.publishedAt}</span>
                  <span>•</span>
                  <span>{heroPost.readTime}</span>
                </div>
              </div>
            </article>
          )}

          <section id="features" className={styles.featureGrid}>
            {featurePosts.map((post) => (
              <article key={post.slug} className={styles.featureCard} style={{ backgroundImage: post.gradient }}>
                <div className={styles.featureInner}>
                  <span className={styles.pill}>{post.category}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.featureLink}>
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.excerpt}</p>
                  <div className={styles.metaRow}>
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="signals" className={styles.signalPanel}>
            <header className={styles.sectionHeader}>
              <h3>Signals</h3>
              <p>Quick pulses on emerging tech, climate, and culture.</p>
            </header>
            <div className={styles.signalList}>
              {quickPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.signalItem}>
                  <span className={styles.signalAccent} style={{ background: post.accent }} />
                  <div>
                    <p className={styles.signalTitle}>{post.title}</p>
                    <p className={styles.signalMeta}>
                      {post.category} • {post.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
