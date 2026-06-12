import { business, services } from '../config';
import styles from './Footer.module.css';

const pages = ['Home', 'Services', 'About', 'Contact'];

export default function Footer({ go }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            {business.short}<em>Services</em>
          </div>
          <p className={styles.tagline}>{business.tagline}</p>
          <a href={`tel:${business.phone}`} className={styles.phone}>
            {business.phone}
          </a>
          {business.emergency && (
            <p className={styles.emergency}>24/7 Emergency Available</p>
          )}
        </div>

        <div>
          <div className={styles.colTitle}>Services</div>
          {services.map((s) => (
            <button key={s.id} className={styles.footLink} onClick={() => go('Services')}>
              {s.name}
            </button>
          ))}
        </div>

        <div>
          <div className={styles.colTitle}>Company</div>
          {pages.map((p) => (
            <button key={p} className={styles.footLink} onClick={() => go(p)}>
              {p}
            </button>
          ))}
        </div>

        <div>
          <div className={styles.colTitle}>Contact</div>
          <p className={styles.info}>{business.address}</p>
          <p className={styles.info}>{business.city}</p>
          <a href={`mailto:${business.email}`} className={styles.info}>
            {business.email}
          </a>
          <p className={styles.info}>{business.license}</p>
        </div>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>© {year} {business.name} · {business.license}</span>
        <span>{business.tagline}</span>
      </div>
    </footer>
  );
}
