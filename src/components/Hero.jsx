import { Link } from 'react-router-dom';
import { company } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Diagonal geometric stripe accent — navy/red/gold corner ribbon */}
      <div className="stripe-accent">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="hero__inner">
          <span className="hero__eyebrow">{company.tagline}</span>
          <h1 className="hero__headline">
            Professional Security Solutions <em>You Can Trust</em>
          </h1>
          <p className="hero__subtext">
            Our team of trained and experienced security guards are available 24/7 to
            provide you with a comprehensive security solution tailored to your specific
            needs.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--red">
              Get a Free Consultation
            </Link>
            <a href="#services" className="btn btn--outline">
              Our Services
            </a>
          </div>
          <div className="hero__contact">
            <span>
              <strong>CALL US:</strong> {company.phones[0]}
            </span>
            <span>
              <strong>EMAIL:</strong> {company.email}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
