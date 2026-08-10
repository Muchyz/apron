import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <div className="card mv-card">
      <div className="mv-card__icon"><Target size={30} strokeWidth={2} /></div>
      <h2 className="section-heading section-heading--navy">Our Mission</h2>
      <p>
        To provide dependable and professional security services that guarantee safety,
        peace of mind, and protection of our clients' property and assets.
      </p>
    </div>
  );
}
