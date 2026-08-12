export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container split about-split">
        <div>
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-heading about-heading">About Us</h2>
          <p className="section-intro about-intro">
            APRON SECURITY SERVICES LIMITED is a professional security services provider
            based in Nairobi, Kenya. The company is committed to delivering reliable,
            disciplined, and high-quality security solutions to businesses, residential
            communities, institutions, and events. Founded on the principles of integrity,
            professionalism, and vigilance, APRON SECURITY SERVICES LIMITED focuses on
            protecting people, property, and assets through a combination of trained
            personnel and modern security technology.
          </p>
        </div>
        <div className="about-photo">
          <div className="about-photo__frame">
            <img
              src="/team-photo.jpg"
              alt="Apron Security guards standing in formation outside the head office"
              className="about-photo__img"
            />
          </div>
          <span className="about-photo__badge">Est. Nairobi, Kenya</span>
        </div>
      </div>
    </section>
  );
}
