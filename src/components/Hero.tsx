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
       overflow: 'hidden'
    }}>
      {/* Vector Background Pattern */}
      <div style={{ 
         position: 'absolute', 
         top: 0, left: 0, width: '100%', height: '100%', 
         zIndex: -1,
         background: '#ffffff'
      }}>
         {/* Large Abstract Blueish Vector Shapes */}
         <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0, opacity: 0.8 }}
         >
            <path 
               fill="#dbeafe" 
               d="M0,256L48,266.7C96,277,192,299,288,293.3C384,288,480,256,576,218.7C672,181,768,139,864,138.7C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
            <path 
               fill="#93c5fd" 
               fillOpacity="0.7"
               d="M0,160L48,181.3C96,203,192,245,288,266.7C384,288,480,288,576,261.3C672,235,768,181,864,181.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
            <path 
               fill="#3b82f6" 
               fillOpacity="0.5"
               d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
         </svg>
      </div>

      <RevealOnScroll className="reveal-up">
        <div className="container flex flex-col items-center" style={{ maxWidth: '800px' }}>
          <h1 style={{ 
             fontSize: '3.5rem', 
             fontWeight: 800, 
             color: '#121212', 
             lineHeight: 1.1, 
             marginBottom: '1.5rem',
             letterSpacing: '-0.03em'
          }}>
            Arcu Suscipit Massa Aliquam Proin Amet
          </h1>
          <p style={{ 
             fontSize: '1.125rem', 
             color: 'var(--text-secondary)', 
             marginBottom: '3rem', 
             maxWidth: '650px', 
             lineHeight: 1.6
          }}>
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor,
          </p>
          <button className="btn btn-primary" style={{ 
             padding: '1rem 3rem', 
             fontSize: '1rem', 
             fontWeight: 600, 
             borderRadius: '4px',
             background: '#4966af',
             color: 'white'
          }}>
            Get Started
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
