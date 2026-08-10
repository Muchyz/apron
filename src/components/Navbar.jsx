import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  Info,
  ShieldCheck,
  Images,
  MessageSquareQuote,
  Award,
  UserRound,
  PhoneCall,
  Menu,
  X,
} from 'lucide-react';
import { company } from '../data/content.js';

const pageLinks = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'About Us', to: '/about', icon: Info },
  { label: 'Our Services', to: '/our-services', icon: ShieldCheck },
  { label: 'Gallery', to: '/gallery', icon: Images },
  { label: 'Testimonials', to: '/testimonials', icon: MessageSquareQuote },
];

const hashLinks = [
  { label: 'Why Choose Us', to: '/#why-choose-us', icon: Award },
  { label: "Director's Message", to: '/#director-message', icon: UserRound },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close}>
          <img
            className="navbar__logo"
            src="/logo.png"
            alt="Apron Security Limited circular badge logo"
          />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name" style={{ display: 'block' }}>
              APRON SECURITY LIMITED
            </span>
            <span className="navbar__brand-tag">{company.tagline}</span>
          </span>
        </Link>

        {/* Desktop nav — unchanged behaviour, just icons added */}
        <nav className="navbar__links navbar__links--desktop">
          {pageLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <item.icon size={16} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          {hashLinks.map((item) => (
            <Link key={item.to} to={item.to}>
              <item.icon size={16} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          ))}
          <Link to="/contact">
            <PhoneCall size={16} strokeWidth={2} />
            <span>Contact Us</span>
          </Link>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile drawer + overlay */}
      <div className={`navbar__overlay${open ? ' open' : ''}`} onClick={close} />
      <aside className={`navbar__drawer${open ? ' open' : ''}`}>
        <div className="navbar__drawer-head">
          <span className="navbar__drawer-title">Menu</span>
          <button className="navbar__drawer-close" aria-label="Close menu" onClick={close}>
            <X size={22} />
          </button>
        </div>

        <nav className="navbar__drawer-links">
          {pageLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <item.icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          {hashLinks.map((item) => (
            <Link key={item.to} to={item.to} onClick={close}>
              <item.icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          ))}
          <Link to="/contact" onClick={close} className="navbar__drawer-cta">
            <PhoneCall size={20} strokeWidth={2} />
            <span>Contact Us</span>
          </Link>
        </nav>
      </aside>
    </header>
  );
}
