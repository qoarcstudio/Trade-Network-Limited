"use client"
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';
import Placeholder from './Placeholder';

export default function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = [
    { name: "Premium Widget", variant: "Blue", price: "$85" },
    { name: "Elite Gadget", variant: "Silver", price: "$120" },
    { name: "Master Tool", variant: "Black", price: "$45" },
    { name: "Pro Device", variant: "White", price: "$210" },
    { name: "Smart Gear", variant: "Red", price: "$99" },
    { name: "Ultra Pack", variant: "Green", price: "$150" },
    { name: "Zen Set", variant: "Tan", price: "$75" },
    { name: "Power Unit", variant: "Gray", price: "$300" }
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
    <section id="products" style={{ padding: '8rem 0', background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="container">
        
        <RevealOnScroll className="reveal-up">
          <div className="flex justify-between items-center flex-col-md items-start-md gap-md" style={{ marginBottom: '3.5rem' }}>
            <div>
              <span className="badge">New Arrivals</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 800 }}>Featured Products</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '500px' }}>
                Explore our latest collection of premium tradeCommerce solutions built for modern businesses.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignSelf: 'flex-start' }}>
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
                 aria-label="Previous products"
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
                 aria-label="Next products"
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
          {products.map((product, i) => (
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
                {/* Product Image Placeholder */}
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

                {/* Product Info */}
                <div style={{ padding: '0 0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>{product.name}</h3>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontSize: '1.125rem' }}>{product.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                    {product.variant} Edition
                  </p>

                  <button className="btn btn-outline" style={{ width: '100%', borderRadius: '8px', padding: '0.8rem' }}>
                    Quick Add
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="reveal-up" delay={400}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <Link href="/products" className="btn btn-secondary" style={{ padding: '1rem 3rem' }}>
              View Full Collection
            </Link>
          </div>
        </RevealOnScroll>

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
