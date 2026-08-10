export default function About() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div>
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-heading">About Us</h2>
          <p className="section-intro">
            APRON SECURITY SERVICES LIMITED is a professional security services provider
            based in Nairobi, Kenya. The company is committed to delivering reliable,
            disciplined, and high-quality security solutions to businesses, residential
            communities, institutions, and events. Founded on the principles of integrity,
            professionalism, and vigilance, APRON SECURITY SERVICES LIMITED focuses on
            protecting people, property, and assets through a combination of trained
            personnel and modern security technology.
          </p>
        </div>
        <div>
          <img
            src="https://placehold.co/560x420/1B3A5C/FFFFFF?text=Apron+Security+Team"
            alt="Apron Security guards standing in formation outside the head office"
            style={{ borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}
          />
        </div>
      </div>
    </section>
  );
}
