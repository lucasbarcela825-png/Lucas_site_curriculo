import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/8 bg-black/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-7 h-7 border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors duration-300">
              <span className="text-xs font-bold tracking-widest text-white">LB</span>
            </div>
            <span className="text-sm font-medium tracking-[0.15em] text-white/70 group-hover:text-white transition-colors duration-300 uppercase hidden sm:block">
              Lucas Barcela
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-xs tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleNav('#contato'); }}
              className="px-5 py-2 border border-white/20 text-xs tracking-[0.12em] uppercase font-medium text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Entrar em contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-white/8"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNav('#contato'); }}
                className="mt-2 px-5 py-3 border border-white/20 text-xs tracking-[0.12em] uppercase font-medium text-white/80 text-center hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Entrar em contato
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
