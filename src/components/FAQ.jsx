import { useState } from 'react';
import { faqs } from '../data/content.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="section" id="faq">
      <div className="container">
        <span className="section-eyebrow">Common Questions</span>
        <h2 className="section-heading" style={{ marginBottom: '26px' }}>
          Frequently Asked Questions
        </h2>

        <div className="accordion">
          {faqs.map((item, i) => (
            <div className={`accordion-item${openIndex === i ? ' open' : ''}`} key={item.q}>
              <button
                className="accordion-item__q"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className="icon">+</span>
              </button>
              <div className="accordion-item__a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
