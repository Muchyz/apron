import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const certifications = [
  {
    id: 'incorporation',
    title: 'Certificate of Incorporation',
    issuer: 'Registrar of Companies, Republic of Kenya',
    refLabel: 'Certificate No.',
    ref: 'PVT-Q7U957K8',
    detail: 'Apron Security Services Limited is duly incorporated as a Private Limited Company under the Companies Act, 2015 (incorporated 30 October 2019).',
    img: '/assets/certifications/incorporation.jpg',
  },
  {
    id: 'psra',
    title: 'PSRA Registration Certificate',
    issuer: 'Private Security Regulatory Authority, Office of the President',
    refLabel: 'Registration No.',
    ref: 'PSRA/BSSL/19/69',
    detail: 'Registered as a Corporate Private Security Service Provider under Section 28 of the Private Security Regulation Act No. 13 of 2016.',
    img: '/assets/certifications/psra.jpg',
  },
  {
    id: 'kra-pin',
    title: 'KRA PIN Certificate',
    issuer: 'Kenya Revenue Authority',
    refLabel: 'PIN',
    ref: 'P052375882S',
    detail: 'Registered taxpayer with active VAT and Company Income Tax obligations.',
    img: '/assets/certifications/kra-pin.jpg',
  },
  {
    id: 'kra-tcc',
    title: 'Tax Compliance Certificate',
    issuer: 'Kenya Revenue Authority',
    refLabel: 'Certificate No.',
    ref: 'KRAEON1441816824',
    detail: 'Confirms that all relevant tax returns have been filed and taxes due have been paid as provided by law.',
    img: '/assets/certifications/kra-tcc.jpg',
  },
  {
    id: 'business-permit',
    title: 'Unified Business Permit (Trade Licence)',
    issuer: 'Nairobi City County',
    refLabel: 'Licence No.',
    ref: 'UBP124342',
    detail: 'Trade licence covering Security Guard Services, valid within Nairobi City County.',
    img: '/assets/certifications/business-permit.jpg',
  },
];

export default function CertificationsPage() {
  const [active, setActive] = useState(null);

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Fully Licensed &amp; Compliant</span>
          <h1>Certifications &amp; Licensing</h1>
        </div>
      </div>

      <section className="section" id="certifications">
        <div className="container">
          <span className="section-eyebrow">
            <ShieldCheck size={16} style={{ marginRight: '6px' }} />
            Verified Credentials
          </span>
          <h2 className="section-heading">Registered, Licensed &amp; Compliant</h2>
          <p className="section-intro" style={{ marginBottom: '30px' }}>
            Apron Security Services Limited operates as a fully registered corporate
            private security provider in Kenya. Tap any certificate below to view it
            in full.
          </p>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <button
                key={cert.id}
                className="cert-card"
                onClick={() => setActive(cert)}
                aria-label={`View ${cert.title}`}
              >
                <div className="cert-card__thumb">
                  <img src={cert.img} alt={cert.title} loading="lazy" />
                </div>
                <div className="cert-card__body">
                  <h3>{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__ref">{cert.refLabel}: {cert.ref}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="cert-lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <img src={active.img} alt={active.title} />
            <div className="cert-lightbox__caption">
              <h3>{active.title}</h3>
              <p>{active.issuer}</p>
              <p>{active.refLabel}: {active.ref}</p>
              <p className="cert-lightbox__detail">{active.detail}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
