"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Placeholder from '@/components/Placeholder';
import Link from 'next/link';

const VALUES = [
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  },
  {
    title: "Dolor Sit Amet",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  },
  {
    title: "Consectetur Adipiscing",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  }
];


const STATS = [
  { label: "Active Users", value: "50k+" },
  { label: "Support Rate", value: "99.9%" },
  { label: "Countries", value: "45+" },
  { label: "Team Members", value: "120+" }
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', colorScheme: 'light' }}>
      <Header />

      {/* Hero Section */}
      <section className="hero-section" style={{ 
        background: 'linear-gradient(135deg, rgba(73, 102, 175, 0.05) 0%, #f8fafd 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-light)',
        isolation: 'isolate'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <RevealOnScroll className="reveal-up">
            <span className="badge">Our Mission</span>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={100}>
            <h1 style={{ color: 'var(--accent-dark)', marginBottom: '2rem' }}>
              Lorem ipsum dolor sit amet consectetur
            </h1>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={200}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
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
                <Placeholder ratio="5/4" />
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <RevealOnScroll className="reveal-right">
              <h2 style={{ color: 'var(--accent-dark)', fontSize: '2.5rem' }}>Lorem ipsum dolor sit</h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-right" delay={100}>
              <p style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '1.125rem', marginTop: '1.5rem' }}>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-right" delay={200}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-primary">Join Our Team</button>
                <button className="btn btn-outline">Our Culture</button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 0', background: 'var(--accent-dark)', color: 'white' }}>
        <div className="container grid-responsive-4" style={{ textAlign: 'center' }}>
          {STATS.map((stat, i) => (
            <RevealOnScroll key={i} className="reveal-up" delay={i * 100}>
              <div>
                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>{stat.value}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '8rem 2rem', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <RevealOnScroll className="reveal-up">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-dark)', marginBottom: '1rem' }}>Our Core Values</h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-up" delay={100}>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </RevealOnScroll>
          </div>

          <div className="grid-responsive-3">
            {VALUES.map((val, i) => (
              <RevealOnScroll key={i} className="reveal-up" delay={i * 150}>
                <div style={{ 
                  padding: '3rem', 
                  background: '#f8fafd', 
                  borderRadius: 'var(--radius-lg)', 
                  border: '1px solid var(--border-light)',
                  textAlign: 'center'
                }}>
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
                  <h3 style={{ marginBottom: '1rem', color: 'var(--accent-dark)' }}>{val.title}</h3>
                  <p style={{ lineHeight: 1.6 }}>{val.description}</p>
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
