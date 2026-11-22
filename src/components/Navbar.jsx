import React from 'react';
import { Sun, Moon, Github } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 50,
      maxWidth: '72rem',
      margin: '0 auto',
      backgroundColor: 'var(--color-card-bg)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid var(--color-card-border)',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px var(--color-shadow)'
    }}>
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between" style={{ height: '3.5rem' }}>
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 48 48" fill="none" style={{ width: '1.75rem', height: '1.75rem' }}>
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="22" stroke="url(#logoGradient)" strokeWidth="3" fill="none" />
              <rect x="14" y="14" width="12" height="12" rx="2" fill="url(#logoGradient)" opacity="0.9" />
              <rect x="18" y="18" width="12" height="12" rx="2" fill="#F97316" opacity="0.8" />
              <rect x="22" y="22" width="12" height="12" rx="2" fill="url(#logoGradient)" opacity="0.9" />
            </svg>
            <span className="font-heading font-bold text-base md:text-lg transition-colors group-hover:text-accent sm:inline hidden">
              UI UX Pro Max
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted hover:text-accent transition-colors">Features</a>
            <a href="#stacks" className="text-sm text-muted hover:text-accent transition-colors">Stacks</a>
            <a href="#styles" className="text-sm text-muted hover:text-accent transition-colors">Styles</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              style={{ width: '2.25rem', height: '2.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}
              aria-label="Toggle theme"
              className="text-muted hover:text-accent transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.375rem 0.75rem', display: 'flex', gap: '0.375rem', fontSize: '0.875rem' }}
            >
              <Github size={16} />
              <span>...</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
