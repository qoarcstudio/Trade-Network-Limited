"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, height: '80px', display: 'flex', alignItems: 'center', background: 'var(--header-bg)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container flex justify-between items-center" style={{ padding: '0 2rem' }}>
        
        {/* Logo Left */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <button style={{ 
             display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', 
             padding: '0.6rem 1.25rem', borderRadius: '4px', gap: '0.5rem',
             border: 'none', cursor: 'pointer', color: 'var(--text-primary)'
           }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>LOGO</span>
           </button>
        </div>

        {/* Center Nav (Desktop) */}
        <nav className="flex items-center hidden-md" style={{ gap: '2rem', fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ padding: '0.5rem', color: 'var(--text-primary)' }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
             </svg>
           </button>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>


      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div style={{ 
          position: 'absolute', top: '80px', left: 0, width: '100%', 
          background: 'var(--header-bg)', borderBottom: '1px solid var(--border-light)', 
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          boxShadow: 'var(--shadow-md)', color: 'var(--text-primary)'
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
