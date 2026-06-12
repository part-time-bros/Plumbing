import { business, services, stats, testimonials } from '../config';
import { PhoneIcon, CheckIcon, StarIcon, serviceIcon } from '../icons';
import styles from './Home.module.css';

export default function Home({ go }) {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <>
      <Hero go={go} />
      <PhoneStrip />
      <ServicesSection featured={featured} rest={rest} go={go} />
      <StatsBar />
      <Testimonials />
      <CtaBanner go={go} />
    </>
  );
}

/* ── HERO ──────────────────────────────────────────── */
function Hero({ go }) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        {business.emergency && (
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            24 / 7 Emergency Response
          </div>
        )}

        <h1 className={styles.heroTitle}>
          YOUR<br />
          HOME.<br />
          OUR<br />
          CRAFT.
        </h1>

        <p className={styles.heroSub}>
          Plumbing · Roofing · HVAC · Electrical — licensed, bonded,
          and insured since {business.founded}.
        </p>

        <div className={styles.heroCtas}>
          <a href={`tel:${business.phone}`} className="btn btn-primary">
            <PhoneIcon />
            Call Now
          </a>
          <button className="btn btn-ghost" onClick={() => go('Contact')}>
            Get a Free Quote
          </button>
        </div>

        <div className={styles.trustRow}>
          {[
            { icon: <CheckIcon />, text: 'Licensed & Insured', sub: business.license },
            { icon: <CheckIcon />, text: 'Free Estimates',     sub: 'No obligation' },
            { icon: <PhoneIcon />, text: '24/7 Emergency',     sub: 'Always available' },
            { icon: <CheckIcon />, text: `Est. ${business.founded}`, sub: business.tagline },
          ].map((t, i) => (
            <div className={styles.trustItem} key={i}>
              <span className={styles.trustIcon}>{t.icon}</span>
              <div>
                <div className={styles.trustText}>{t.text}</div>
                <div className={styles.trustSub}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PHONE STRIP ───────────────────────────────────── */
function PhoneStrip() {
  return (
    <div className={styles.phoneStrip}>
      <span className={styles.phoneStripLabel}>Call us directly:</span>
      <a href={`tel:${business.phone}`} className={styles.phoneStripNumber}>
        {business.phone}
      </a>
      <span className={styles.phoneStripMeta}>
        {business.license} · Licensed · Bonded · Insured
      </span>
    </div>
  );
}

/* ── SERVICES ──────────────────────────────────────── */
function ServicesSection({ featured, rest, go }) {
  const FeatIcon = serviceIcon[featured.id];

  return (
    <section className={`section ${styles.servicesSection}`}>
      <div className="wrap">
        <div className="eyebrow">What We Do</div>
        <div className={styles.servicesBento}>
          {/* Featured — left col, full height */}
          <div className={styles.featuredCard}>
            <span className={styles.svcIcon}><FeatIcon /></span>
            <h2 className={styles.featuredName}>{featured.name}</h2>
            <p className={styles.featuredShort}>{featured.short}</p>
            <p className={styles.featuredDesc}>{featured.desc}</p>
            <ul className={styles.featuredList}>
              {featured.items.map((item) => (
                <li key={item} className={styles.featuredItem}>
                  <span className={styles.checkIcon}><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost" onClick={() => go('Contact')}
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
              Request Service
            </button>
          </div>

          {/* Right col — 3 cards stacked */}
          <div className={styles.restCards}>
            {rest.map((s) => {
              const Icon = serviceIcon[s.id];
              return (
                <div className={styles.serviceCard} key={s.id}>
                  <span className={styles.svcIconSm}><Icon /></span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{s.name}</h3>
                    <p className={styles.cardShort}>{s.short}</p>
                    <p className={styles.cardDesc}>{s.desc}</p>
                  </div>
                  <button
                    className={`btn btn-outline ${styles.cardCta}`}
                    onClick={() => go('Services')}
                  >
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS BAR ─────────────────────────────────────── */
function StatsBar() {
  return (
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
  );
}

/* ── TESTIMONIALS ──────────────────────────────────── */
function Testimonials() {
  return (
    <section className={`section ${styles.testiSection}`}>
      <div className="wrap">
        <div className="eyebrow">What Customers Say</div>
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <div className={styles.testiCard} key={i}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className={styles.testiQuote}>"{t.quote}"</p>
              <div className={styles.testiName}>{t.name}</div>
              <div className={styles.testiMeta}>{t.city} · {t.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA BANNER ────────────────────────────────────── */
function CtaBanner({ go }) {
  return (
    <div className="cta-banner">
      <div className="wrap">
        <div className="cta-banner-inner">
          <div>
            <div className="eyebrow eyebrow--dim">Ready to get started?</div>
            <h2 className="cta-headline">Need it fixed<br />today?</h2>
          </div>
          <div className="cta-phone-block">
            <div className="eyebrow eyebrow--dim" style={{ justifyContent: 'flex-end' }}>
              Call directly
            </div>
            <a href={`tel:${business.phone}`} className="cta-phone-number">
              {business.phone}
            </a>
            <span className="cta-phone-meta">
              {business.emergency ? '24/7 Emergency Available' : 'Mon – Sat, 7am – 6pm'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
