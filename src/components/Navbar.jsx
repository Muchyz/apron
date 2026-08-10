import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, logoPlaceholder } from '../data/content.js';

// Items that route to their own dedicated page
const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/our-services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
];

// Items that only exist as sections on the homepage — link there via hash
const hashLinks = [
  { label: 'Why Choose Us', to: '/#why-choose-us' },
  { label: "Director's Message", to: '/#director-message' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            className="navbar__logo"
            src={logoPlaceholder}
            alt="Apron Security Services Limited circular badge logo"
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name" style={{ display: 'block' }}>
              Apron Security
            </span>
            <span className="navbar__brand-tag">{company.tagline}</span>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`navbar__links${open ? ' open' : ''}`}>
          {pageLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          {hashLinks.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
