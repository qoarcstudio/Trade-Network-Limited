import RevealOnScroll from './RevealOnScroll';
import Placeholder from './Placeholder';

export default function ImageGallery() {
  const items = [1, 2, 3, 4];

  return (
    <section id="gallery" style={{ padding: '8rem 0', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'left' }}>
            <RevealOnScroll className="reveal-up">
              <span className="badge" style={{ background: '#f0f4ff', color: '#4966af', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', display: 'inline-block' }}>New Arrivals</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#121212', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Gallery
              </h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-up" delay={100}>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.125rem', lineHeight: 1.6 }}>
                A collection of our premium tradeCommerce designs and community moments.
              </p>
            </RevealOnScroll>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
             <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #e1e8f0', display: 'grid', placeItems: 'center', background: 'white' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <button style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#121212', color: 'white', border: 'none', display: 'grid', placeItems: 'center' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </button>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {[1, 2, 3, 4].map((i) => (
            <RevealOnScroll key={i} className="reveal-up" delay={i * 100}>
                <div style={{ border: '1px solid #e1e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                    <Placeholder ratio="1/1" text="IMAGE PLACEHOLDER" />
                </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
