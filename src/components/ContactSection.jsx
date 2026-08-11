import { Phone, Mail, MapPin, Building2, Hash } from 'lucide-react';
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
          <div className="card contact-info-card">
            <ul className="contact-info">
              <li>
                <span className="contact-info__icon"><Phone size={18} /></span>
                <div>
                  <b>Phone</b>
                  <span>{company.phones.join(' / ')}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><Mail size={18} /></span>
                <div>
                  <b>Email</b>
                  <span>{company.email}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><MapPin size={18} /></span>
                <div>
                  <b>P.O Box</b>
                  <span>{company.poBox}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><Building2 size={18} /></span>
                <div>
                  <b>Head Office</b>
                  <span>{company.headOffice}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><Building2 size={18} /></span>
                <div>
                  <b>Embu Branch</b>
                  <span>{company.branchOffice}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><Hash size={18} /></span>
                <div>
                  <b>Follow &amp; Tag</b>
                  <span>{company.hashtag}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="card contact-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
