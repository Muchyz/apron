import Gallery from '../components/Gallery.jsx';

export default function GalleryPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-eyebrow">See Us In Action</span>
          <h1>Our Gallery</h1>
        </div>
      </div>

      <Gallery />
    </main>
  );
}
