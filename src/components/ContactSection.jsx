import { company } from '../data/content.js';
import ContactForm from './ContactForm.jsx';

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="section-heading" style={{ marginBottom: '30px' }}>
          Contact Us
        </h2>

        <div className="contact-grid">
          <div>
            <ul className="contact-info">
              <li>
                <b>Phone:</b>
                <span>&nbsp;{company.phones.join(' / ')}</span>
              </li>
              <li>
                <b>Email:</b>
                <span>&nbsp;{company.email}</span>
              </li>
              <li>
                <b>P.O Box:</b>
                <span>&nbsp;{company.poBox}</span>
              </li>
              <li>
                <b>Head Office:</b>
                <span>&nbsp;{company.headOffice}</span>
              </li>
              <li>
                <b>Embu Branch:</b>
                <span>&nbsp;{company.branchOffice}</span>
              </li>
              <li>
                <b>Follow &amp; Tag:</b>
                <span>&nbsp;{company.hashtag}</span>
              </li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
