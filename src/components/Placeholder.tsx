"use client";

import React from 'react';

interface PlaceholderProps {
  width?: string;
  height?: string;
  ratio?: string;
  text?: string;
  className?: string;
}

export default function Placeholder({ 
  width = '100%', 
  height = '100%', 
  ratio, 
  text = 'Image Placeholder', 
  className = '' 
}: PlaceholderProps) {
  return (
    <div 
      className={className}
      style={{ 
        width, 
        height, 
        aspectRatio: ratio,
        background: '#e5e7eb', // Slightly darker grey for better visibility
        border: '1px solid #d1d5db',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Diagonal Lines (X) */}
      <svg 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.3 }} 
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#9ca3af" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#9ca3af" strokeWidth="1" />
      </svg>

      {/* Qoarc Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '4rem',
        fontWeight: 900,
        color: '#121212',
        opacity: 0.05,
        pointerEvents: 'none',
        letterSpacing: '-0.05em',
        fontFamily: 'Inter, system-ui, sans-serif',
        userSelect: 'none',
        whiteSpace: 'nowrap'
      }}>
        Qoarc
      </div>
      
      <span style={{ 
        zIndex: 1, 
        color: '#6b7280', 
        fontSize: '0.65rem', 
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        textAlign: 'center',
        padding: '0 10%'
      }}>
        {text}
      </span>
    </div>
  );
}
