import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, height: '80px', display: 'flex', alignItems: 'center', background: '#ffffff', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container flex justify-between items-center" style={{ padding: '0 4rem' }}>
        
        {/* Logo Left */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
           <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', padding: '0.5rem 1rem', borderRadius: '4px', gap: '0.5rem' }}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             <span style={{ fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.05em', color: '#121212' }}>Trade Network Limited</span>
           </div>
           <div style={{ height: '24px', width: '1px', background: 'var(--border-medium)', margin: '0 1.5rem' }}></div>
        </div>

        {/* Center Nav */}
        <nav className="flex items-center" style={{ gap: '2.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/discover">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Icons Right - REMOVED for wireframe focus */}
        <div style={{ width: '120px' }}></div>
      </div>
    </header>
  );
}
