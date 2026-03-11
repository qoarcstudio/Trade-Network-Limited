"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Services from '@/components/Services';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const SERVICES_DATA = [
  {
    id: 1,
    name: "Business Strategy Consulting",
    category: "Consulting",
    description: "Our comprehensive business strategy consulting helps organizations identify growth opportunities, optimize operations, and build sustainable competitive advantages in today's dynamic market landscape.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    thumbnails: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1454165833772-d99614ad5904?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    ],
    sku: "SRV-STR-001",
    specs: [
      { label: "Duration", value: "Customized" },
      { label: "Delivery", value: "On-site / Remote" },
      { label: "Level", value: "Executive" },
      { label: "Focus", value: "Growth & Optimization" }
    ]
  },
];

export default function ServicePage() {
  const params = useParams();
  const id = params.id ? parseInt(params.id as string) : 1;
  const service = SERVICES_DATA.find(s => s.id === id) || SERVICES_DATA[0];

  const [mainImage, setMainImage] = useState(service.image);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setMainImage(service.image);
  }, [service]);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          
          {/* Breadcrumbs */}
          <nav style={{ marginBottom: '3rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link href="/services" style={{ color: 'inherit' }}>Services</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{service.name}</span>
          </nav>

          <div className="grid-responsive-2" style={{ alignItems: 'start' }}>
            
            {/* Left: Image Gallery */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RevealOnScroll className="reveal-left">
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--card-bg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={mainImage} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </RevealOnScroll>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {service.thumbnails.map((thumb, idx) => (
                  <RevealOnScroll key={idx} className="reveal-up" delay={idx * 100}>
                    <button 
                      onClick={() => setMainImage(thumb)}
                      style={{ 
                        aspectRatio: '1/1', overflow: 'hidden', borderRadius: 'var(--radius-md)', 
                        border: mainImage === thumb ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                        padding: 0, cursor: 'pointer', background: 'var(--card-bg)'
                      }}
                    >
                      <img src={thumb} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Right: Service Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <RevealOnScroll className="reveal-right">
                <span className="badge">{service.category}</span>
              </RevealOnScroll>
              
              <RevealOnScroll className="reveal-right" delay={100}>
                <h1 style={{ color: 'var(--text-primary)' }}>{service.name}</h1>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={300}>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{service.description}</p>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={400}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                  
                  <Link href="/contact" className="btn btn-primary" style={{ height: '3.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Inquire About Service
                  </Link>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                    Get a customized quote tailored to your business needs.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-right" delay={500}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <p><strong>Service ID:</strong> <span style={{ color: 'var(--text-secondary)' }}>{service.sku}</span></p>
                  <p><strong>Category:</strong> <span style={{ color: 'var(--text-secondary)' }}>{service.category}</span></p>
                </div>
              </RevealOnScroll>

            </div>

          </div>

          {/* Details Tabs */}
          <div style={{ marginTop: '6rem' }}>
            <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3rem', overflowX: 'auto' }}>
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
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Detailed Description</h4>
                    <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <ul className="grid-responsive-2" style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
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
                        {service.specs.map((spec, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                            <td style={{ padding: '1rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>{spec.label}</td>
                            <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <p style={{ color: 'var(--text-secondary)' }}>No reviews yet for this service. Be the first to inquire!</p>
                  </div>
                )}
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

      {/* Related Services */}
      <div style={{ padding: '6rem 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
        <Services />
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
