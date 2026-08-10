import { clientLogos } from '../data/content.js';

export default function Clients() {
  return (
    <section className="section section--tight">
      <div className="container">
        <span className="section-eyebrow" style={{ textAlign: 'center', display: 'block' }}>
          Trusted By
        </span>
        <h2 className="section-heading section-heading--navy" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Businesses, Institutions &amp; Residential Estates
        </h2>
        <div className="clients-strip">
          {clientLogos.map((logo) => (
            <img key={logo.id} src={logo.src} alt={logo.alt} width={140} height={70} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
