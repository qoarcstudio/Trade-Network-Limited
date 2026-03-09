"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Products from '@/components/Products';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: "$1,299.00",
    rating: 4.8,
    reviews: 124,
    category: "Living Room",
    description: "Experience ultimate comfort and style with our Modern Leather Sofa. Crafted from premium top-grain leather and featuring a sleek, minimalist design, this sofa is the perfect centerpiece for any contemporary living space.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    thumbnails: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"
    ],
    sku: "SOFA-001",
    specs: [
      { label: "Material", value: "Top-grain Leather" },
      { label: "Frame", value: "Solid European Oak" },
      { label: "Dimensions", value: "220cm W x 95cm D x 85cm H" },
      { label: "Weight", value: "65kg" }
    ]
  },
  // Add other items if needed, or default for demo
];

export default function ProductPage() {
  const params = useParams();
  const id = params.id ? parseInt(params.id as string) : 1;
  const product = PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];

  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          
          {/* Breadcrumbs */}
          <nav style={{ marginBottom: '3rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link href="/shop" style={{ color: 'inherit' }}>Shop</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{product.name}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'start' }}>
            
            {/* Left: Image Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RevealOnScroll className="reveal-left">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={mainImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </RevealOnScroll>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {product.thumbnails.map((thumb, idx) => (
                  <RevealOnScroll key={idx} className="reveal-up" delay={idx * 100}>
                    <button 
                      onClick={() => setMainImage(thumb)}
                      style={{ 
                        aspectRatio: '1/1', overflow: 'hidden', borderRadius: 'var(--radius-md)', 
                        border: mainImage === thumb ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                        padding: 0, cursor: 'pointer', background: '#fff'
                      }}
                    >
                      <img src={thumb} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RevealOnScroll className="reveal-right">
                <span className="badge">{product.category}</span>
              </RevealOnScroll>
              
              <RevealOnScroll className="reveal-right" delay={100}>
                <h1 style={{ color: 'var(--accent-dark)', fontSize: '3rem', lineHeight: 1.1 }}>{product.name}</h1>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={200}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-blue)' }}>{product.price}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                    <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>({product.reviews} reviews)</span>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={300}>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{product.description}</p>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={400}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '0.5rem' }}>
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '2.5rem', height: '2.5rem', display: 'grid', placeItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}>-</button>
                      <span style={{ width: '3rem', textAlign: 'center', fontWeight: 700 }}>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} style={{ width: '2.5rem', height: '2.5rem', display: 'grid', placeItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}>+</button>
                    </div>
                    <button className="btn btn-primary" style={{ flex: 1, height: '3.5rem' }}>Add to Cart</button>
                  </div>

                  <button className="btn" style={{ height: '3.5rem', background: 'var(--accent-dark)', color: '#fff' }}>Buy Now</button>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={500}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <p><strong>SKU:</strong> <span style={{ color: 'var(--text-secondary)' }}>{product.sku}</span></p>
                  <p><strong>Category:</strong> <span style={{ color: 'var(--text-secondary)' }}>{product.category}</span></p>
                </div>
              </RevealOnScroll>

            </div>

          </div>

          {/* Details Tabs */}
          <div style={{ marginTop: '6rem' }}>
            <div style={{ display: 'flex', gap: '3rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3rem' }}>
              {['description', 'specifications', 'reviews'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{ 
                    padding: '1rem 0', background: 'none', border: 'none', 
                    borderBottom: activeTab === tab ? '2px solid var(--accent-blue)' : '2px solid transparent',
                    cursor: 'pointer', color: activeTab === tab ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    fontWeight: 700, textTransform: 'capitalize', fontSize: '1rem'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div style={{ minHeight: '200px' }}>
              <RevealOnScroll className="reveal-up">
                {activeTab === 'description' && (
                  <div style={{ maxWidth: '800px' }}>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--accent-dark)' }}>Detailed Description</h4>
                    <p style={{ lineHeight: 1.8 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <ul style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <li>✓ Premium quality materials</li>
                      <li>✓ Ergonomic design for comfort</li>
                      <li>✓ Easy assembly process</li>
                      <li>✓ 2-year warranty included</li>
                    </ul>
                  </div>
                )}
                {activeTab === 'specifications' && (
                  <div style={{ maxWidth: '600px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        {product.specs.map((spec, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                            <td style={{ padding: '1rem 0', fontWeight: 600, color: 'var(--accent-dark)' }}>{spec.label}</td>
                            <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <p style={{ color: 'var(--text-secondary)' }}>No reviews yet for this product. Be the first to review!</p>
                  </div>
                )}
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* Related Products */}
      <div style={{ padding: '6rem 0', background: '#fff', borderTop: '1px solid var(--border-light)' }}>
        <Products />
      </div>

      <Footer />
      
      <style jsx>{`
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(73, 102, 175, 0.1);
          color: var(--accent-blue);
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </main>
  );
}
