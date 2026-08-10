import { whyChooseUs } from '../data/content.js';

export default function WhyChooseUs() {
  return (
    <section className="section section--alt" id="why-choose-us">
      <div className="container">
        <span className="section-eyebrow">The Apron Difference</span>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>
          Why Choose Us?
        </h2>
        <ul className="why-list">
          {whyChooseUs.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
