"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo.');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Header />

      <section style={{ flex: 1, padding: '6rem 0' }}>
        <div className="container">
          
          {/* Hero / Title Section */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <RevealOnScroll className="reveal-up">
              <span className="badge">Project Inquiry</span>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-up" delay={100}>
              <h1 style={{ color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>Get in touch</h1>
            </RevealOnScroll>
            <RevealOnScroll className="reveal-up" delay={200}>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                  This is a wireframe placeholder for the contact page description. 
                  Users can reach out via the provided methods or the form below.
                </p>
            </RevealOnScroll>
          </div>

          <div className="grid-responsive-2">
            
            {/* Left Column: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <RevealOnScroll className="reveal-left" delay={300}>
                <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>Email Us</h3>
                  <p style={{ marginBottom: '1.5rem' }}>Our friendly team is here to help.</p>
                  <a href="mailto:hello@tradecommerce.com" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>hello@tradecommerce.com</a>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-left" delay={400}>
                <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>Call Us</h3>
                  <p style={{ marginBottom: '1.5rem' }}>Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+1234567890" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>+1 (234) 567-890</a>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="reveal-left" delay={500}>
                <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>Visit Us</h3>
                  <p style={{ marginBottom: '1.5rem' }}>Come say hello at our office HQ.</p>
                  <address style={{ color: 'var(--text-secondary)', fontStyle: 'normal', fontWeight: 600 }}>
                    100 Smith Street,<br /> Collingwood VIC 3066 AU
                  </address>
                </div>
              </RevealOnScroll>

            </div>

            {/* Right Column: Contact Form */}
            <RevealOnScroll className="reveal-right" delay={300}>
              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="grid-responsive-2">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="name" style={{ fontWeight: 600, fontSize: '0.875rem' }}>First Name</label>
                      <input 
                        type="text" id="name" name="name" 
                        placeholder="Your name" required 
                        value={formData.name} onChange={handleChange}
                        style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', background: 'var(--bg-primary)', outline: 'none' }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.875rem' }}>Email Address</label>
                      <input 
                        type="email" id="email" name="email" 
                        placeholder="you@example.com" required 
                        value={formData.email} onChange={handleChange}
                        style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', background: 'var(--bg-primary)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="subject" style={{ fontWeight: 600, fontSize: '0.875rem' }}>Subject</label>
                    <input 
                      type="text" id="subject" name="subject" 
                      placeholder="How can we help?" required 
                      value={formData.subject} onChange={handleChange}
                      style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', background: 'var(--bg-primary)', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.875rem' }}>Message</label>
                    <textarea 
                      id="message" name="message" 
                      placeholder="Leave us a message..." rows={6} required 
                      value={formData.message} onChange={handleChange}
                      style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)', background: 'var(--bg-primary)', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ height: '3.5rem', marginTop: '1rem' }}>
                    Send Message
                  </button>
                  
                  <p style={{ fontSize: '0.875rem', textAlign: 'center', marginTop: '1rem' }}>
                    By clicking send message, you agree to our <Link href="#" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        input:focus, textarea:focus {
          border-color: var(--accent-blue) !important;
          box-shadow: 0 0 0 4px rgba(73, 102, 175, 0.1);
        }
      `}</style>
    </main>
  );
}
