import { coreValues } from '../data/content.js';

export default function CoreValues() {
  return (
    <section className="section values-section">
      <div className="container">
        <span className="section-eyebrow">What Guides Us</span>
        <h2 className="section-heading" style={{ marginBottom: '40px' }}>
          Our Core Values
        </h2>
        <div className="values-ribbon">
          {coreValues.map((value, i) => (
            <div className="values-ribbon__item" key={value} style={{ '--i': i }}>
              <span className="values-ribbon__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="values-ribbon__text">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
