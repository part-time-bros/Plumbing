import { useState } from 'react';
import { business } from '../config';
import { PhoneIcon, MenuIcon, CloseIcon } from '../icons';
import styles from './Nav.module.css';

const pages = ['Home', 'Services', 'About', 'Contact'];

export default function Nav({ page, go }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (p) => {
    go(p);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={`wrap ${styles.inner}`}>
          <button className={styles.logo} onClick={() => navigate('Home')}>
            {business.short}
            <em>Services</em>
          </button>

          <div className={styles.links}>
            {pages.map((p) => (
              <button
                key={p}
                className={`${styles.link} ${page === p ? styles.active : ''}`}
                onClick={() => navigate(p)}
              >
                {p}
              </button>
            ))}
            <a href={`tel:${business.phone}`} className={`btn btn-primary ${styles.navCta}`}>
              <PhoneIcon />
              {business.phone}
            </a>
          </div>

          <button
            className={styles.toggle}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <button
          className={styles.mobileClose}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>

        {pages.map((p) => (
          <button key={p} className={styles.mobileLink} onClick={() => navigate(p)}>
            {p}
          </button>
        ))}

        <a href={`tel:${business.phone}`} className={`btn btn-primary ${styles.mobileCta}`}>
          <PhoneIcon />
          {business.phone}
        </a>
      </div>
    </>
  );
}
