import React from 'react';

export default function Card({ children, className }) {
  return (
    <div className={`rounded-2xl shadow-md bg-white ${className || ''}`} style={{ borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', background: '#fff' }}>
      {children}
    </div>
  );
}
