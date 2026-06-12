import { useState } from 'react';
import { business, services, hours } from '../config';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CheckIcon } from '../icons';
import styles from './Contact.module.css';

const initialForm = { name: '', phone: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change (inline validation UX from UUPM)
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Validate on blur per UUPM: "Validate on blur, not submit-only"
  const validateField = (name, value) => {
    if (name === 'name' && !value.trim()) return 'Name is required.';
    if (name === 'phone' && !value.trim()) return 'Phone number is required.';
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) return 'Enter a valid email address.';
    return '';
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const submit = () => {
    const newErrors = {};
    if (!form.name.trim())  newErrors.name  = 'Name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setSent(true);
  };

  return (
    <>
      <header className="page-header">
        <div className="wrap">
          <h1>Get in Touch</h1>
          <p>
            We respond within 2 hours during business hours.
            For emergencies, call directly — we answer 24/7.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className={styles.layout}>

            {/* LEFT — contact info */}
            <div className={styles.info}>
              <div className="eyebrow">Contact Info</div>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true"><PhoneIcon /></span>
                  <div>
                    <div className={styles.infoLabel}>Phone</div>
                    <a
                      href={`tel:${business.phone}`}
                      className={styles.infoValue}
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-xl)' }}
                    >
                      {business.phone}
                    </a>
                    {business.emergency && (
                      <div className={styles.emergencyTag}>24/7 Emergency Available</div>
                    )}
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true"><MailIcon /></span>
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <a href={`mailto:${business.email}`} className={styles.infoValue}>
                      {business.email}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true"><MapPinIcon /></span>
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <div className={styles.infoValue}>{business.address}</div>
                    <div className={styles.infoValue}>{business.city}</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon} aria-hidden="true"><ClockIcon /></span>
                  <div>
                    <div className={styles.infoLabel}>Hours</div>
                    {hours.map(([day, time]) => (
                      <div key={day} className={styles.hourRow}>
                        <span className={styles.hourDay}>{day}</span>
                        <span className={styles.hourTime}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.licenseBlock}>
                <span className={styles.infoLabel}>License</span>
                <span className={styles.infoValue}>{business.license}</span>
              </div>
            </div>

            {/* RIGHT — form */}
            {sent ? (
              <div className={styles.success} role="status" aria-live="polite">
                <span className={styles.successIcon} aria-hidden="true"><CheckIcon /></span>
                <h2 className={styles.successTitle}>Message Received</h2>
                <p className={styles.successText}>
                  We'll be in touch within 2 hours. For urgent jobs, call us directly.
                </p>
                <a href={`tel:${business.phone}`} className="btn btn-primary">
                  <PhoneIcon />
                  {business.phone}
                </a>
              </div>
            ) : (
              <div className="form-box">
                <h2 className={styles.formTitle}>Request a Quote</h2>
                <p className={styles.formNote}>Free estimate — no obligation, no sales pressure.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name <span aria-hidden="true" style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      className={`form-input ${errors.name ? styles.inputError : ''}`}
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={update}
                      onBlur={onBlur}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span className={styles.fieldError} id="name-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone <span aria-hidden="true" style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      className={`form-input ${errors.phone ? styles.inputError : ''}`}
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      onBlur={onBlur}
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span className={styles.fieldError} id="phone-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    className={`form-input ${errors.email ? styles.inputError : ''}`}
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    onBlur={onBlur}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span className={styles.fieldError} id="email-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service Needed</label>
                  <select
                    className="form-input"
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Tell Us About It</label>
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Describe what's going on — as much or as little as you know."
                    rows={5}
                  />
                </div>

                <button
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={submit}
                  type="button"
                >
                  Send Message
                </button>

                <p className={styles.required}>
                  <span style={{ color: 'var(--accent)' }}>*</span> Required fields
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
