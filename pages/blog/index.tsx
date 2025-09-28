import Head from 'next/head';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import styles from '@/styles/BlogIndex.module.css';
import { posts } from '@/lib/posts';

const heroPost = posts.find((post) => post.mood === 'hero');
const featurePosts = posts.filter((post) => post.mood === 'feature').slice(0, 4);
const allStories = posts
  .filter((post) => post.slug !== heroPost?.slug && post.mood !== 'feature')
  .slice(0, 10);
const quickPosts = posts.filter((post) => post.mood === 'quick');

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Lantern + Logic 🏮 — Modern technology review</title>
        <meta
          name="description"
          content="Lantern + Logic publishes features, all-access stories, and signal briefs on emerging technology, systems design, and the culture around innovation."
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

          {featurePosts.length > 0 && (
            <section id="features" className={styles.featureSection} aria-labelledby="top-stories-heading">
              <header className={styles.sectionHeading}>
                <h2 id="top-stories-heading">Top stories</h2>
                <p>Deep dives into frontier labs, cybersecurity shifts, and the builders changing how we live online.</p>
              </header>
              <div className={styles.featureMosaic}>
                {featurePosts.map((post, index) => {
                  const cardClasses = [styles.featureCard];

                  if (index === 0) {
                    cardClasses.push(styles.featureCardHero);
                  }

                  if (featurePosts.length > 3 && index === featurePosts.length - 1) {
                    cardClasses.push(styles.featureCardWide);
                  }

                  return (
                    <article
                      key={post.slug}
                      className={cardClasses.join(' ')}
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
                  );
                })}
              </div>
            </section>
          )}

          {allStories.length > 0 && (
            <section id="all-stories" className={styles.allStoriesSection} aria-labelledby="all-stories-heading">
              <header className={styles.sectionHeading}>
                <h2 id="all-stories-heading">All stories</h2>
                <p>Ten must-read reports from the field, spanning moonshot prototypes to policy experiments.</p>
              </header>
              <div className={styles.allStoriesGrid}>
                {allStories.map((post) => (
                  <article key={post.slug} className={styles.allStoryCard}>
                    <div className={styles.allStoryMedia} style={{ backgroundImage: `url(${post.coverImage})` }} />
                    <div className={styles.allStoryBody}>
                      <span className={styles.pill}>{post.category}</span>
                      <Link href={`/blog/${post.slug}`} className={styles.allStoryLink}>
                        <h3>{post.title}</h3>
                      </Link>
                      <p>{post.excerpt}</p>
                    </div>
                    <div className={`${styles.metaRow} ${styles.allStoryMeta}`}>
                      <span>{post.publishedAt}</span>
                      <span aria-hidden="true">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {quickPosts.length > 0 && (
            <section id="signals" className={styles.signalSection} aria-labelledby="signals-heading">
              <div className={styles.sectionHeading}>
                <h2 id="signals-heading">Signal pulses</h2>
                <p>Snackable intel on products, funding moves, and cultural waves shaping the next release cycle.</p>
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
