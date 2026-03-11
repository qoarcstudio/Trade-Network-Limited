"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Placeholder from '@/components/Placeholder';
import { useState } from 'react';
import Link from 'next/link';

const FEATURED_ITEMS = [
  {
    title: "Lorem ipsum dolor sit amet",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Duis aute irure dolor in",
    description: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=1200"
  }
];

const CONTENT_CARDS = [
  {
    title: "Sed ut perspiciatis unde omnis",
    description: "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Lorem Ipsum",
    date: "10 Oct 21",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Nemo enim ipsam voluptatem quia",
    description: "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    author: "Dolor Sit",
    date: "12 Oct 21",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Ut enim ad minima veniam",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    author: "Amet Consectetur",
    date: "15 Oct 21",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600"
  }
];

export default function DiscoverPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', colorScheme: 'light' }}>
      <Header />

      {/* Hero Slider Section */}
      <section className="hero-section" style={{ background: '#f0f4f8', isolation: 'isolate' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ alignItems: 'center' }}>
            
            {/* Left: Product Image */}
            <RevealOnScroll className="reveal-left">
              <div style={{ aspectRatio: '16/9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <Placeholder ratio="16/9" />
              </div>
            </RevealOnScroll>
 
            {/* Right: Text Content */}
            <div className="flex flex-col items-start-md" style={{ gap: '1.5rem' }}>
              <RevealOnScroll className="reveal-right">
                <h1 style={{ color: 'var(--accent-dark)' }}>
                  {FEATURED_ITEMS[activeSlide].title}
                </h1>
              </RevealOnScroll>
              <RevealOnScroll className="reveal-right" delay={100}>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {FEATURED_ITEMS[activeSlide].description}
                </p>
              </RevealOnScroll>
              <RevealOnScroll className="reveal-right" delay={200}>
                <button className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 3rem' }}>
                  Learn More
                </button>
              </RevealOnScroll>
            </div>
          </div>
 
          {/* Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '3rem' }}>
            {FEATURED_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: activeSlide === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeSlide === idx ? 'var(--accent-blue)' : 'var(--border-medium)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Introductory Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <RevealOnScroll className="reveal-up">
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>
              Lorem ipsum dolor sit amet
            </h3>
          </RevealOnScroll>
          <RevealOnScroll className="reveal-up" delay={100}>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Vertical Content Cards */}
      <section style={{ padding: '2rem 0 8rem' }}>
        <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {CONTENT_CARDS.map((card, i) => (
            <RevealOnScroll key={i} className="reveal-up" delay={i * 100}>
              <div 
                className="content-card flex flex-col-md gap-md"
                style={{ 
                  alignItems: 'center',
                  background: '#ffffff',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Image Left */}
                <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                  <Placeholder ratio="4/3" />
                </div>

                {/* Text Content Right */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ color: 'var(--accent-dark)' }}>{card.title}</h3>
                  <p>{card.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      <span>{card.date}, by {card.author}</span>
                    </div>
                    <Link href="#" style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em' }}>
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
        .content-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </main>
  );
}
