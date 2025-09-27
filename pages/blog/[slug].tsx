import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BlogHeader from '@/components/BlogHeader';
import styles from '@/styles/PostPage.module.css';
import { getPost } from '@/lib/posts';

export default function PostPage() {
  const {
    query: { slug }
  } = useRouter();
  const post = typeof slug === 'string' ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className={styles.missing}>
        <p>Loading story…</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} — Lantern + Logic 🏮</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className={styles.page}>
        <BlogHeader />
        <article>
          <header className={styles.header}>
            <div className={styles.hero}>
              <span className={styles.pill}>{post.category}</span>
              <h1>{post.title}</h1>
              <div className={styles.meta}>
                <span>{post.publishedAt}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <div className={styles.cover}>
                <img src={post.coverImage} alt={post.title} />
              </div>
            </div>
          </header>
          <div className={styles.body}>
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.footer}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to all stories
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
