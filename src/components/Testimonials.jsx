import { useEffect, useState } from 'react';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <span className="section-eyebrow" style={{ textAlign: 'center', display: 'block' }}>
          Client Feedback
        </span>
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '30px' }}>
          What Our Clients Say
        </h2>

        <div className="testimonial-slider">
          <div className="card testimonial-card">
            <img className="testimonial-card__avatar" src={current.avatar} alt={`Photo of ${current.name}`} />
            <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className="testimonial-card__quote">&ldquo;{current.quote}&rdquo;</p>
            <div className="testimonial-card__name">{current.name}</div>
            <div className="testimonial-card__role">{current.role}</div>
          </div>

          <div className="slider-controls">
            <button onClick={prev} aria-label="Previous testimonial">‹</button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <span key={i} className={i === index ? 'active' : ''}></span>
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
