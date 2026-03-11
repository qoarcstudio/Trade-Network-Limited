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
           <button style={{ 
             display: 'flex', alignItems: 'center', background: '#f5f5f5', 
             padding: '0.6rem 1.25rem', borderRadius: '4px', gap: '0.5rem',
             border: 'none', cursor: 'pointer', color: '#13171a'
           }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             <span style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>LOGO</span>
           </button>
        </div>

        {/* Center Nav (Desktop) */}
        <nav className="flex items-center hidden-md" style={{ gap: '2rem', fontWeight: 500, color: '#13171a', fontSize: '0.9375rem' }}>
          <Link href="/">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
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

        {/* Icons Right */}
        <div className="flex items-center gap-6 hidden-md">
          <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', color: '#13171a' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span style={{ 
              position: 'absolute', top: '-8px', right: '-8px', 
              background: '#13171a', color: '#fff', fontSize: '10px', 
              width: '18px', height: '18px', borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
            }}>2</span>
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#13171a' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
        </div>
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
