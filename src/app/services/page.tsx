"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Placeholder from '@/components/Placeholder';
import Link from 'next/link';

const SERVICES = [
  {
    title: "Global Supply Chain Management",
    description: "Streamlined logistics and supply chain optimization for modern international trade networks.",
    date: "10 Oct 21",
    author: "Technical Team",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Market Analysis & Entry",
    description: "Deep-dive market research and strategic planning for new venture launches across secondary markets.",
    date: "12 Oct 21",
    author: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Digital Trade Solutions",
    description: "Modernized platform development and e-trade infrastructure for high-growth commerce operations.",
    date: "15 Oct 21",
    author: "Dev Team",
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sustainable Trade Advisory",
    description: "ESG integration and sustainability consulting for global trading partners and supply networks.",
    date: "20 Oct 21",
    author: "Sustainability VP",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      {/* Hero Section - Matching Wireframe */}
      <section className="hero-section" style={{ background: 'var(--bg-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <RevealOnScroll className="reveal-up">
            <h1 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 800 }}>Explore Our Solutions</h1>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={100}>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Comprehensive trade and commerce services designed to empower your business in local and global markets.
            </p>
          </RevealOnScroll>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '3rem' }}>
            {[0, 1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: idx === 0 ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === 0 ? 'var(--accent-blue)' : 'var(--border-medium)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services List - Following Wireframe Vertical Layout */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
             <RevealOnScroll className="reveal-up">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Core Services</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Delivering excellence across every touchpoint of your commerce journey.</p>
             </RevealOnScroll>
          </div>

          {SERVICES.map((service, i) => (
            <RevealOnScroll key={i} className="reveal-up" delay={i * 100}>
              <div 
                className="service-item grid-responsive-2"
                style={{ 
                  alignItems: 'center',
                  background: 'var(--bg-primary)',
                  gap: '3rem'
                }}
              >
                {/* Image Placeholder Left */}
                <div style={{ 
                  width: '100%', 
                  aspectRatio: '16/10', 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-secondary)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Text Content Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{service.title}</h3>
                  <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{service.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                       <span>{service.date}, by {service.author}</span>
                    </div>
                    <Link href="/service/1" className="read-more-btn" style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--text-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .read-more-btn {
          position: relative;
          padding-bottom: 4px;
        }
        .read-more-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--accent-blue);
          transition: width 0.3s ease;
        }
        .read-more-btn:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .service-item {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
