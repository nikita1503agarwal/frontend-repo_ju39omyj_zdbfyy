import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-40 transition-all' +
        (scrolled
          ? ' bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm'
          : ' bg-transparent')
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#1E5A43] flex items-center justify-center shadow-sm">
            <span className="text-white font-semibold">G</span>
          </div>
          <span className="text-[#21302C] font-semibold tracking-tight">The Gate PM</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#21302C]/80 hover:text-[#21302C] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="ml-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
          style={{ backgroundColor: '#D9B77A', color: '#21302C' }}
        >
          Book Audit
        </a>
      </div>
    </header>
  );
}
