import { business, values, stats } from '../config';
import { ShieldIcon, CheckIcon, PhoneIcon } from '../icons';
import styles from './About.module.css';

const credentials = [
  { icon: ShieldIcon, title: 'Fully Licensed',     desc: business.license },
  { icon: CheckIcon,  title: 'Fully Insured',      desc: 'General liability + workers\' compensation' },
  { icon: CheckIcon,  title: 'Background Checked', desc: 'Every technician on every job, no exceptions' },
];

export default function About({ go }) {
  const yearsInBusiness = new Date().getFullYear() - business.founded;

  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <h1>About Us</h1>
          <p>
            Real people. Real work. {yearsInBusiness} years of doing it right in this community.
          </p>
        </div>
      </header>

      {/* Story + Values */}
      <section className="section">
        <div className="wrap">
          <div className={styles.storyGrid}>
            {/* Left — story text */}
            <div>
              <div className="eyebrow">Our Story</div>
              <div className={styles.storyText}>
                <p>
                  {business.name} started in {business.founded} with one truck,
                  the right licenses, and a simple promise: show up, do the work,
                  charge a fair price. That's still the entire playbook.
                </p>
                <p>
                  We're a local crew — not a franchise, not a call center. When you
                  call, you get us. When we quote a price, that's the price. When we
                  say it's fixed, it is.
                </p>
                <p>
                  Most of our business comes from referrals and repeat customers.
                  We don't spend money on ads — we spend it on training, the right
                  tools, and making sure every job is one you'd recommend to a neighbor.
                </p>
                <p>
                  Over {yearsInBusiness} years we've built something simple: a reputation
                  you can count on when something goes wrong at home.
                </p>
              </div>
              <div className={styles.storyActions}>
                <a href={`tel:${business.phone}`} className="btn btn-primary">
                  <PhoneIcon />
                  {business.phone}
                </a>
                <button className="btn btn-outline" onClick={() => go('Contact')}>
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right — values grid */}
            <div>
              <div className="eyebrow">How We Work</div>
              <div className={styles.valuesGrid}>
                {values.map((v) => (
                  <div className={styles.valueCard} key={v.title}>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials */}
      <section className={`section ${styles.credSection}`}>
        <div className="wrap">
          <div className="eyebrow">Credentials</div>
          <div className={styles.credGrid}>
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <div className={styles.credCard} key={c.title}>
                  <span className={styles.credIcon} aria-hidden="true"><Icon /></span>
                  <h3 className={styles.credTitle}>{c.title}</h3>
                  <p className={styles.credDesc}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="cta-banner">
        <div className="wrap">
          <div className="cta-banner-inner">
            <h2 className="cta-headline">Come see for<br />yourself.</h2>
            <div className="cta-phone-block">
              <a href={`tel:${business.phone}`} className="cta-phone-number">
                {business.phone}
              </a>
              <span className="cta-phone-meta">
                {business.emergency ? '24/7 for emergencies' : 'Mon – Sat, 7am – 6pm'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
