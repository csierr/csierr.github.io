import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'studies', label: 'Studies' },
  { id: 'tools', label: 'Tools' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'books', label: 'Book Recs' },
  { id: 'contact', label: 'Contact' },
];

function ThemeToggle({ small }: { small?: boolean }) {
  const { theme, toggle } = useTheme();
  const size = small ? 16 : 20;
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`p-2 rounded transition-all duration-200 hover:opacity-90 ${small ? '' : 'shadow-sm'}`}
    >
      {theme === 'dark' ? <Moon size={size} /> : <Sun size={size} />}
    </button>
  );
}

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Top Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 terminal-border bg-card/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg font-bold">&gt;_</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded transition-all duration-300 font-mono text-sm ${
                    activeSection === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-50 flex items-center gap-2">
        <div className="p-1 bg-card terminal-border rounded">
          <ThemeToggle small />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-card terminal-border rounded glow-primary"
          aria-label="Open navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl px-6 py-3 rounded transition-all duration-300 font-mono ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground glow-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};
