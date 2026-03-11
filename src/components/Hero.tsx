import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section className="hero-section" style={{ 
       position: 'relative', 
       width: '100%', 
       minHeight: 'calc(100vh - 80px)',
       display: 'flex', 
       flexDirection: 'column', 
       alignItems: 'center', 
       justifyContent: 'center',
       textAlign: 'center',
       overflow: 'hidden',
       isolation: 'isolate',
       background: '#f0f4f8'
    }}>
      {/* Diagonal Line Background Pattern */}
      <div style={{ 
         position: 'absolute', 
         top: 0, left: 0, width: '100%', height: '100%', 
         zIndex: -1,
         background: '#f0f4f8',
         backgroundImage: `repeating-linear-gradient(
           -45deg,
           transparent,
           transparent 1px,
           rgba(65, 103, 177, 0.08) 1px,
           rgba(65, 103, 177, 0.08) 2px,
           transparent 2px,
           transparent 40px
         )`,
         maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
      }}>
        {/* Curvy Bottom Shape */}
        <svg 
           width="100%" 
           height="120" 
           viewBox="0 0 1440 120" 
           preserveAspectRatio="none"
           style={{ position: 'absolute', bottom: 0, left: 0 }}
        >
          <path fill="var(--bg-primary)" d="M0,64C240,128,480,0,720,64C960,128,1200,0,1440,64L1440,120L0,120Z"></path>
        </svg>
      </div>

      <RevealOnScroll className="reveal-up">
        <div className="container flex flex-col items-center" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.04em', fontSize: '4.5rem', fontWeight: 700 }}>
            Arcu Suscipit Massa Aliquam Proin Amet
          </h1>
          <p style={{ 
             fontSize: '1rem', 
             color: 'var(--text-secondary)', 
             marginBottom: '3rem', 
             maxWidth: '650px', 
             lineHeight: 1.6
          }}>
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor,
          </p>
          <button className="btn" style={{ 
            padding: '1rem 3rem', 
            background: '#4167b1', 
            color: '#fff', 
            borderRadius: '4px', 
            fontWeight: 600,
            border: 'none',
            fontSize: '1rem'
          }}>
            Get Started
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
