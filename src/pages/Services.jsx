import { services, business } from '../config';
import { CheckIcon, PhoneIcon, serviceIcon } from '../icons';
import styles from './Services.module.css';

export default function Services({ go }) {
  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <h1>Our Services</h1>
          <p>
            Full-service residential and light commercial trade work.
            Licensed, insured, and backed by a written guarantee on every job.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className={styles.grid}>
            {services.map((s) => {
              const Icon = serviceIcon[s.id];
              return (
                <article className={styles.card} key={s.id}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap} aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <h2 className={styles.name}>{s.name}</h2>
                      <p className={styles.short}>{s.short}</p>
                    </div>
                  </div>

                  <p className={styles.desc}>{s.desc}</p>

                  <ul className={styles.list} aria-label={`${s.name} services included`}>
                    {s.items.map((item) => (
                      <li key={item} className={styles.listItem}>
                        <span className={styles.check} aria-hidden="true"><CheckIcon /></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn btn-outline ${styles.cta}`}
                    onClick={() => go('Contact')}
                    aria-label={`Request ${s.name} service`}
                  >
                    Request Service
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="cta-banner">
        <div className="wrap">
          <div className="cta-banner-inner">
            <div>
              <div className="eyebrow eyebrow--dim">Not sure what you need?</div>
              <h2 className="cta-headline">
                Call us —<br />we'll figure it out.
              </h2>
            </div>
            <div className="cta-phone-block">
              <p className={styles.ctaNote}>
                We'll diagnose over the phone and give you a straight answer.
                No charge, no obligation.
              </p>
              <a href={`tel:${business.phone}`} className="btn btn-primary">
                <PhoneIcon />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
