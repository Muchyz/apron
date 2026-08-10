import { trainingStandards } from '../data/content.js';

export default function TrainingStandards() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">Consistently Prepared</span>
        <h2 className="section-heading">Security Training Standards</h2>
        <p className="section-intro" style={{ marginBottom: '30px' }}>
          Apron Security Services Limited maintains strict training standards to ensure
          all security personnel are competent, disciplined, and capable of handling
          modern security challenges. Our guards undergo training in the following areas:
        </p>
        <ul className="training-list">
          {trainingStandards.map((item) => (
            <li key={item.label}>
              <span>
                <b>{item.label}</b> — {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
