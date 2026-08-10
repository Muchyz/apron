import { coreValues } from '../data/content.js';

export default function CoreValues() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">What Guides Us</span>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>
          Our Core Values
        </h2>
        <ul className="value-list">
          {coreValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
