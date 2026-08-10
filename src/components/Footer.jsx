import { Link } from 'react-router-dom';
import { company } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">{company.name}</div>
            <div className="footer-tag">{company.tagline}</div>
            <p style={{ fontSize: '0.9rem' }}>
              Protecting people, property, and assets across Nairobi and Embu with
              trained, disciplined, and vetted security personnel.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul className="footer-links">
              <li>{company.phones[0]}</li>
              <li>{company.email}</li>
              <li>{company.poBox}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span>
            {company.domain} &nbsp;·&nbsp; <span className="footer-hashtag">{company.hashtag}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
