import Head from 'next/head';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import styles from '@/styles/BlogIndex.module.css';
import { posts } from '@/lib/posts';

const heroPost = posts.find((post) => post.mood === 'hero');
const featurePosts = posts.filter((post) => post.mood === 'feature');
const dispatchPosts = posts.filter((post) => post.mood === 'dispatch');
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
            <article
              id="spotlight"
              className={styles.hero}
              style={{ backgroundImage: `${heroPost.gradient}, url(${heroPost.coverImage})` }}
            >
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

          {(featurePosts.length > 0 || dispatchPosts.length > 0) && (
            <div className={styles.editorialRow}>
              {featurePosts.length > 0 && (
                <section id="features" className={styles.featureSection} aria-labelledby="top-stories-heading">
                  <header className={styles.sectionHeading}>
                    <h2 id="top-stories-heading">Top stories</h2>
                    <p>Immersive reporting, speculative design, and climate creativity.</p>
                  </header>
                  <div className={styles.featureMosaic}>
                    {featurePosts.map((post, index) => (
                      <article
                        key={post.slug}
                        className={`${styles.featureCard} ${index === 0 ? styles.featureCardLarge : ''}`}
                        style={{ backgroundImage: `${post.gradient}, url(${post.coverImage})` }}
                      >
                        <div className={styles.featureInner}>
                          <span className={styles.pill}>{post.category}</span>
                          <Link href={`/blog/${post.slug}`} className={styles.featureLink}>
                            <h3>{post.title}</h3>
                          </Link>
                          <p>{post.excerpt}</p>
                          <div className={styles.metaRow}>
                            <span>{post.publishedAt}</span>
                            <span aria-hidden="true">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {dispatchPosts.length > 0 && (
                <aside id="dispatches" className={styles.dispatchSection} aria-labelledby="dispatches-heading">
                  <header className={styles.sectionHeading}>
                    <h2 id="dispatches-heading">Field dispatches</h2>
                    <p>Firsthand notes from expeditions, labs, and civic pilots.</p>
                  </header>
                  <div className={styles.dispatchList}>
                    {dispatchPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.dispatchItem}>
                        <span className={styles.dispatchAccent} style={{ background: post.accent }} aria-hidden="true" />
                        <div>
                          <p className={styles.dispatchTitle}>{post.title}</p>
                          <p className={styles.dispatchMeta}>
                            {post.publishedAt} • {post.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          )}

          {quickPosts.length > 0 && (
            <section id="signals" className={styles.signalSection} aria-labelledby="signals-heading">
              <div className={styles.sectionHeading}>
                <h2 id="signals-heading">Signal pulses</h2>
                <p>Snap insights to share in your next standup or salon.</p>
              </div>
              <div className={styles.signalRail}>
                {quickPosts.map((post) => (
                  <article key={post.slug} className={styles.signalCard}>
                    <span className={styles.signalAccent} style={{ background: post.accent }} aria-hidden="true" />
                    <div className={styles.signalBody}>
                      <Link href={`/blog/${post.slug}`} className={styles.signalTitle}>
                        {post.title}
                      </Link>
                      <p className={styles.signalExcerpt}>{post.excerpt}</p>
                      <p className={styles.signalMeta}>
                        {post.category} • {post.readTime}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
