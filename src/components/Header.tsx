"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, height: '80px', display: 'flex', alignItems: 'center', background: '#ffffff', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container flex justify-between items-center" style={{ padding: '0 2rem' }}>
        
        {/* Logo Left */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', padding: '0.5rem 1rem', borderRadius: '4px', gap: '0.5rem' }}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             <span style={{ fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.05em', color: '#121212' }}>Trade Network Limited</span>
           </div>
        </div>

        {/* Center Nav (Desktop) */}
        <nav className="flex items-center hidden-md" style={{ gap: '2.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/discover">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ padding: '0.5rem' }}>
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

        {/* Icons Right - Spacer for Desktop */}
        <div className="hidden-md" style={{ width: '120px' }}></div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div style={{ 
          position: 'absolute', top: '80px', left: 0, width: '100%', 
          background: '#ffffff', borderBottom: '1px solid var(--border-light)', 
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/discover" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
