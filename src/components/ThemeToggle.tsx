import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="z-50 p-2 glass-card rounded-full hover-lift shine-effect group"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          size={24}
          className={`absolute inset-0 text-[hsl(var(--carnation-pink))] transition-all duration-500 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        {/* Moon icon */}
        <Moon
          size={24}
          className={`absolute inset-0 text-[hsl(var(--uranian-blue))] transition-all duration-500 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-[hsl(var(--card))] text-foreground text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isDark ? 'Light mode' : 'Dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
