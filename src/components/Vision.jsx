import { Telescope } from 'lucide-react';

export default function Vision() {
  return (
    <div className="card mv-card">
      <div className="mv-card__icon"><Telescope size={30} strokeWidth={2} /></div>
      <h2 className="section-heading section-heading--navy">Our Vision</h2>
      <p>
        To be a leading security service provider recognized for professionalism,
        reliability, and innovative security solutions.
      </p>
    </div>
  );
}
