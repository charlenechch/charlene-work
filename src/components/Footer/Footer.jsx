import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={`${styles.cta} reveal`}>
        <div>
          <h2 className={styles.ctaTitle}>Let's build something together.</h2>
          <p className={styles.ctaSub}>charlene.chai@example.com · usually replies within a day</p>
        </div>
        <a href="mailto:charlene@example.com" className={styles.ctaBtn}>
          Email me →
        </a>
      </div>

      <footer className={styles.footer}>
        <p>© Charlene Chai · 2026</p>
        <div className={styles.footerLinks}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
          <a href="#">CV (PDF)</a>
        </div>
      </footer>
    </>
  )
}
