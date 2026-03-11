"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Placeholder from '@/components/Placeholder';
import Link from 'next/link';

const VALUES = [
  {
    title: "Excellence in Trade",
    description: "We strive for excellence in every transaction, ensuring the highest standards of quality and reliability for our global partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
  {
    title: "Global Reach",
    description: "Our expansive network connects markets across continents, bridging the gap between local producers and international consumers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  },
  {
    title: "Integrity & Trust",
    description: "Transparency and ethical practices are at the heart of everything we do, building long-lasting relationships based on mutual trust.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  }
];

const STATS = [
  { label: "Active Partners", value: "500+" },
  { label: "Global Presence", value: "45+" },
  { label: "Successful Projects", value: "1.2k+" },
  { label: "Dedicated Experts", value: "150+" }
];

export default function AboutUsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      {/* Hero Section */}
      <section className="hero-section" style={{ 
        background: 'linear-gradient(135deg, rgba(73, 102, 175, 0.05) 0%, var(--bg-secondary) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-light)',
        isolation: 'isolate',
        padding: '10rem 0 6rem'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <RevealOnScroll className="reveal-up">
            <span className="badge">Our Mission</span>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={100}>
            <h1 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '3.5rem', fontWeight: 800 }}>
              Connecting the World Through Seamless Trade
            </h1>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={200}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              We are dedicated to revolutionizing the global supply chain, empowering businesses to scale across borders with confidence and efficiency.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container grid-responsive-2" style={{ alignItems: 'center' }}>
          <RevealOnScroll className="reveal-left">
            <div style={{ position: 'relative' }}>
              <div style={{ 
                aspectRatio: '5/4', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Office" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                right: '-2rem', 
                background: 'var(--accent-blue)', 
                color: 'white', 
                padding: '2rem', 
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                fontWeight: 700,
                fontSize: '1.5rem'
              }}>
                Est. 2018
              </div>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '2rem' }}>
            <RevealOnScroll className="reveal-right">
              <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', fontWeight: 800 }}>A Journey of Shared Growth</h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-right" delay={100}>
              <p style={{ lineHeight: 1.8, fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                Founded in 2018, our network was built on the belief that trade should be accessible, transparent, and mutually beneficial. What started as a small team has grown into a global network of dedicated professionals working towards a common goal.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '1.125rem', marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
                We combine deep industry expertise with cutting-edge technology to navigate the complexities of international commerce, ensuring that your business stays ahead of the curve.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-right" delay={200}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact" className="btn btn-primary">Work With Us</Link>
                <Link href="/services" className="btn btn-outline">Explore Solutions</Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container grid-responsive-4" style={{ textAlign: 'center' }}>
          {STATS.map((stat, i) => (
            <RevealOnScroll key={i} className="reveal-up" delay={i * 100}>
              <div>
                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>{stat.value}</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <RevealOnScroll className="reveal-up">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 800 }}>Our Core Values</h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-up" delay={100}>
              <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>Guided by our principles, we deliver value to our clients and partners around the world.</p>
            </RevealOnScroll>
          </div>

          <div className="grid-responsive-3">
            {VALUES.map((val, i) => (
              <RevealOnScroll key={i} className="reveal-up" delay={i * 150}>
                <div style={{ 
                  padding: '3rem', 
                  background: 'var(--bg-secondary)', 
                  borderRadius: 'var(--radius-lg)', 
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ 
                    width: '64px', height: '64px', 
                    borderRadius: '16px', 
                    background: 'var(--accent-blue)', 
                    color: 'white', 
                    display: 'grid', 
                    placeItems: 'center', 
                    margin: '0 auto 2rem',
                    boxShadow: '0 8px 16px rgba(73, 102, 175, 0.2)'
                  }}>
                    {val.icon}
                  </div>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>{val.title}</h3>
                  <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>{val.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
