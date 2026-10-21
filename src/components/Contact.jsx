import { useState } from 'react';
import { profile, formEndpoint } from '../data/site.js';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import SocialLinks from './SocialLinks.jsx';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const mailtoHref = () => {
    const name = values.name.trim() || 'a visitor';
    const senderEmail = values.email.trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${values.message.trim()}\n\nFrom: ${name} (${senderEmail})`;
    const ccParam = senderEmail ? `&cc=${encodeURIComponent(senderEmail)}` : '';

    return `mailto:${profile.email}?${ccParam ? `cc=${encodeURIComponent(senderEmail)}&` : ''}subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const gmailAppHref = () => {
    const name = values.name.trim() || 'a visitor';
    const senderEmail = values.email.trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${values.message.trim()}\n\nFrom: ${name} (${senderEmail})`;
    const ccParam = senderEmail ? `&cc=${encodeURIComponent(senderEmail)}` : '';

    return `googlegmail://co?to=${encodeURIComponent(profile.email)}${ccParam}&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleEmailClick = (e) => {
    if (typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent)) {
      e.preventDefault();
      window.location.href = gmailAppHref();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Please fix the highlighted fields and try again.' });
      return;
    }

    // No form service configured: be honest and offer a working alternative.
    if (!formEndpoint) {
      setStatus({ type: 'notice' });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending…' });
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setValues({ name: '', email: '', message: '' });
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' });
    } catch {
      setStatus({
        type: 'error',
        text: `Sorry, your message could not be sent. Please email ${profile.email} directly.`,
      });
    }
  };

  return (
    <section id="contact" className="section section--black" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <SectionHeading label="GET IN TOUCH" id="contact-title" onDark>
            Let’s work <em>together</em>
          </SectionHeading>
          <p className="lead">
            Have a project, business, or opportunity in mind? I’d love to hear from you. Feel free to reach out, and
            let’s explore how I can help.
          </p>
          <ul className="contact-list">
            <li>
              <span className="icon-circle icon-circle--sm">
                <Icon name="mail" size={18} />
              </span>
              <a href={mailtoHref()} onClick={handleEmailClick}>{profile.email}</a>
            </li>
            <li>
              <span className="icon-circle icon-circle--sm">
                <Icon name="phone" size={18} />
              </span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <span className="icon-circle icon-circle--sm">
                <Icon name="pin" size={18} />
              </span>
              <span>{profile.location}</span>
            </li>
          </ul>
          <SocialLinks />
        </Reveal>

        <Reveal className="contact__form-wrap" delay={0.08}>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'cf-name-err' : undefined}
                required
              />
              {errors.name && (
                <p className="field__error" id="cf-name-err">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'cf-email-err' : undefined}
                required
              />
              {errors.email && (
                <p className="field__error" id="cf-email-err">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="5"
                value={values.message}
                onChange={onChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'cf-message-err' : undefined}
                required
              />
              {errors.message && (
                <p className="field__error" id="cf-message-err">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn--gold" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            <div className="form__status" role="status" aria-live="polite">
              {status.type === 'success' && <p className="form__msg form__msg--success">{status.text}</p>}
              {status.type === 'error' && <p className="form__msg form__msg--error">{status.text}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
