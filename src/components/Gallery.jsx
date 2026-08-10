import { useState } from 'react';
import { galleryCategories, galleryImages } from '../data/content.js';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const items =
    filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <span className="section-eyebrow">See Us In Action</span>
        <h2 className="section-heading">Our Gallery</h2>
        <p className="section-intro" style={{ marginBottom: '26px' }}>
          Take a look at our guards, equipment, and operations in action.
        </p>

        <div className="gallery-filters">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {items.map((img) => (
            <button
              key={img.id}
              className="gallery-item"
              onClick={() => setActive(img)}
              aria-label={`Enlarge image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-item__cat">{img.category}</span>
            </button>
          ))}
        </div>
      </div>

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
            aria-label="Close enlarged image"
          >
            ✕
          </button>
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
