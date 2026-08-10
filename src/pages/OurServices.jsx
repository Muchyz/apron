import Services from '../components/Services.jsx';

export default function OurServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-eyebrow">What We Offer</span>
          <h1>Our Services</h1>
        </div>
      </div>

      {/* detailed=true renders the full write-up for each service */}
      <Services detailed={true} />
    </main>
  );
}
