import { director } from '../data/content.js';

export default function DirectorMessage() {
  return (
    <section className="section" id="director-message">
      <div className="container director">
        <div className="director__photo">
          <img src={director.photo} alt={`Portrait of ${director.name}, ${director.title}`} />
        </div>
        <div>
          <span className="director__quote-mark">&ldquo;</span>
          <span className="section-eyebrow">Director's Message</span>
          {director.message.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h3 className="director__name">{director.name}</h3>
          <p className="director__title">{director.title}</p>
        </div>
      </div>
    </section>
  );
}
