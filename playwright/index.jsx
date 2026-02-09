import React from 'react';
import ReactDOM from 'react-dom/client';

// Optional: import your global styles if needed
// import '../src/index.css';

export function mount(component) {
  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(component);
}
