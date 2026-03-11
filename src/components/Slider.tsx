"use client"
import { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import Placeholder from './Placeholder';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Nibh in dolor bibendum.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim integer. Felis, sagittis viverra nulla mattis scelerisque. Eget enim integer."
    },
    {
      title: "Elevate your commerce.",
      desc: "Experience next-generation tools designed to scale your operations globally with unparalleled efficiency."
    },
    {
      title: "Seamless integrations.",
      desc: "Connect your existing workflows painlessly with our robust API ecosystem built for enterprise reliability."
    },
    {
      title: "Advanced analytics.",
      desc: "Make data-driven decisions confidently with real-time insights across your entire supply chain network."
    },
    {
      title: "Global reach.",
      desc: "Expand to new markets instantly while we handle the complexities of cross-border compliance and logistics."
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="slider" style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container flex flex-col items-center">
        
        {/* Main Content Area */}
        <div style={{ 
          width: '100%', 
          maxWidth: '1000px', 
          padding: '2rem 4rem',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '4rem',
          alignItems: 'center',
          transition: 'all var(--transition-medium)',
          background: '#ffffff'
        }}>
          
          {/* Image Placeholder (Left) */}
          <RevealOnScroll className="reveal-left">
             <Placeholder ratio="4/3" />
          </RevealOnScroll>

          {/* Text Content (Right) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minHeight: '220px', justifyContent: 'center' }}>
            <RevealOnScroll className="reveal-right" delay={100}>
              <h2 key={`title-${currentSlide}`} className="animate-fade-in" style={{ color: 'var(--text-primary)', fontSize: '2.5rem', lineHeight: 1.1 }}>
                {slides[currentSlide].title}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-right" delay={200}>
              <p key={`desc-${currentSlide}`} className="animate-fade-in delay-100" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                 {slides[currentSlide].desc}
              </p>
            </RevealOnScroll>
          </div>

        </div>

        {/* Pagination Dots */}
        <RevealOnScroll className="reveal-up" delay={300}>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '3rem' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === idx ? 'var(--text-primary)' : 'var(--bg-tertiary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color var(--transition-fast)'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
