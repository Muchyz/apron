import { clientLogos } from '../data/content.js';

export default function Clients() {
  return (
    <section className="section section--tight clients-section">
      <div className="container">
        <span className="section-eyebrow clients-eyebrow">Who We Work With</span>
        <h2 className="section-heading clients-heading">
          Our Trusted Partners
        </h2>
        <p className="clients-sub">
          Authorized dealers and distributors of world-class security equipment brands
        </p>
        <div className="clients-grid">
          {clientLogos.map((logo) => (
            <div className="client-tile" key={logo.id}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
