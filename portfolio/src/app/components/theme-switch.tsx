'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-muted-foreground" />
      ) : (
        <Sun size={20} className="text-muted-foreground" />
      )}
    </button>
  );
}