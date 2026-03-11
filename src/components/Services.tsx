"use client"
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';
import Placeholder from './Placeholder';

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const services = [
    { name: "Premium Widget", variant: "Blue" },
    { name: "Elite Gadget", variant: "Silver" },
    { name: "Master Tool", variant: "Black" },
    { name: "Pro Device", variant: "White" },
    { name: "Smart Gear", variant: "Red" },
    { name: "Ultra Pack", variant: "Green" },
    { name: "Zen Set", variant: "Tan" },
    { name: "Power Unit", variant: "Gray" }
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 500); // Wait for animation to finish
    }
  };

  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="container">
        
        <RevealOnScroll className="reveal-up">
          <div className="flex justify-between items-center flex-col-md items-start-md gap-md section-header-margin">
            <div>
              <span className="badge">Featured</span>
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Our Services</h2>
              <p style={{ maxWidth: '500px' }}>
                Explore our latest collection of premium tradeCommerce solutions built for modern businesses.
              </p>
            </div>
            <div className="flex gap-md" style={{ alignSelf: 'flex-start' }}>
               <button 
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '50%', 
                    border: '1px solid var(--border-medium)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'transparent',
                    color: canScrollLeft ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    cursor: canScrollLeft ? 'pointer' : 'default',
                    opacity: canScrollLeft ? 1 : 0.5,
                    transition: 'all var(--transition-medium)'
                 }}
                 aria-label="Previous services"
               >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
               </button>
               <button 
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '50%', 
                    backgroundColor: canScrollRight ? 'var(--text-primary)' : 'var(--bg-tertiary)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none',
                    color: canScrollRight ? 'var(--bg-primary)' : 'var(--text-tertiary)',
                    cursor: canScrollRight ? 'pointer' : 'default',
                    opacity: canScrollRight ? 1 : 0.5,
                    transition: 'all var(--transition-medium)'
                 }}
                 aria-label="Next services"
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </button>
            </div>
          </div>
        </RevealOnScroll>

        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
            paddingBottom: '2rem',
            margin: '0 -1rem',
            padding: '0 1rem'
          }}
          className="hide-scrollbar"
        >
          {services.map((service, i) => (
            <RevealOnScroll 
              key={i} 
              className="reveal-up" 
              delay={i % 4 * 100} // Dynamic staggered delay based on active row view
              style={{ flex: '0 0 calc(25% - 1.5rem)', scrollSnapAlign: 'start', minWidth: '280px' }}
            >
              <div className="product-card" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform var(--transition-medium)',
                cursor: 'pointer'
              }}>
                {/* Image Placeholder */}
                <div style={{ 
                   width: '100%', 
                   aspectRatio: '1', 
                   backgroundColor: 'var(--bg-secondary)', 
                   borderRadius: 'var(--radius-lg)',
                   position: 'relative',
                   marginBottom: '1.5rem',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   border: '1px solid var(--border-light)',
                   overflow: 'hidden'
                }}>
                   <Placeholder ratio="1/1" />
                </div>

                {/* Info */}
                <div style={{ padding: '0 0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{service.name}</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {service.variant}
                  </p>

                  <button className="btn" style={{ 
                    width: '100%', 
                    borderRadius: '30px', 
                    padding: '0.7rem', 
                    border: '1px solid var(--border-medium)',
                    background: 'transparent',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    View Details
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
             <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                style={{ 
                  width: '40px', height: '40px', 
                  borderRadius: '50%', 
                  border: '1px solid var(--border-medium)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  cursor: canScrollLeft ? 'pointer' : 'default',
                  opacity: canScrollLeft ? 1 : 0.3
               }}
             >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                style={{ 
                  width: '40px', height: '40px', 
                  borderRadius: '50%', 
                  border: '1px solid var(--border-medium)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  cursor: canScrollRight ? 'pointer' : 'default',
                  opacity: canScrollRight ? 1 : 0.3
               }}
             >
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </button>
          </div>

      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .product-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
