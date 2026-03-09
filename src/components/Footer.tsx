"use client"
import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Main Footer Content: 4 Columns */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr 1.5fr', 
          gap: '4rem', 
          paddingBottom: '5rem',
          borderBottom: '1px solid var(--border-light)',
          marginBottom: '3rem'
        }}>
          
          {/* Column 1: Product */}
          <RevealOnScroll className="reveal-up">
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: '#121212', fontWeight: 700 }}>Product</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Diam orci</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Mi feugiat</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Netus fermentum</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Suspendisse viverra</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Id dolor</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Erat mattis</Link></li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Column 2: Information */}
          <RevealOnScroll className="reveal-up" delay={100}>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: '#121212', fontWeight: 700 }}>Information</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Nibh</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Egestas</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Dictum</Link></li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Column 3: Company */}
          <RevealOnScroll className="reveal-up" delay={200}>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: '#121212', fontWeight: 700 }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Id maecenas</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Id orci</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Magna ultricies</Link></li>
                <li><Link href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Quis risus</Link></li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Column 4: Subscribe Box */}
          <RevealOnScroll className="reveal-up" delay={300}>
            <div style={{ 
              background: '#f4f7fa', 
              padding: '2.5rem', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem' 
            }}>
              <h4 style={{ fontSize: '1.125rem', color: '#121212', fontWeight: 700 }}>Subscribe</h4>
              <div style={{ position: 'relative', display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  style={{ 
                    width: '100%',
                    padding: '1rem 3.5rem 1rem 1.25rem', 
                    borderRadius: '8px', 
                    border: '1px solid #e1e8f0',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }} 
                />
                <button style={{ 
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  bottom: '5px',
                  width: '42px',
                  background: '#4966af', 
                  color: 'white', 
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Bar */}
        <RevealOnScroll className="reveal-up" delay={400}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo Left */}
            <div style={{ display: 'flex', alignItems: 'center', color: '#4966af', gap: '0.75rem' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L20.5 11.5L31 13L23.5 20.5L25 31L16 25.5L7 31L8.5 20.5L1 13L11.5 11.5L16 2Z" fill="currentColor" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '1.5rem', color: '#121212', letterSpacing: '-0.03em' }}>Trade Network Limited</span>
            </div>

            {/* Legal Links Center */}
            <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#121212' }}>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
            </div>

            {/* Social Icons Right */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f4f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#121212', border: '1px solid #e1e8f0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f4f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#121212', border: '1px solid #e1e8f0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f4f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#121212', border: '1px solid #e1e8f0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.08.39-1.98 1.03-2.67-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.64.64.69 1.03 1.59 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.53-4.47-10-10-10z"/></svg>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
