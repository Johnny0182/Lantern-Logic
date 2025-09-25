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
        <title>{post.title} — Lantern Logic Journal</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className={styles.wrapper}>
        <BlogHeader />
        <article className={styles.article}>
          <header className={styles.hero} style={{ backgroundImage: post.gradient }}>
            <div className={styles.heroInner}>
              <span className={styles.pill}>{post.category}</span>
              <h1>{post.title}</h1>
              <div className={styles.metaRow}>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>
          <div className={styles.body}>
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <footer className={styles.footer}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to all stories
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
}
