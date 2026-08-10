import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this just confirms the UI works.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: '30px' }}>
        <h3 style={{ marginBottom: '8px' }}>Thank you!</h3>
        <p style={{ margin: 0 }}>
          Your message has been noted. Our team will get back to you shortly. In the
          meantime, feel free to call us directly for urgent matters.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Your Phone Number" required />
      <textarea name="message" placeholder="Tell us about your security needs..." required />
      <button type="submit" className="btn btn--red">
        Submit
      </button>
      <p className="contact-form__note">
        This form is a UI placeholder — connect it to your email or CRM when ready.
      </p>
    </form>
  );
}
