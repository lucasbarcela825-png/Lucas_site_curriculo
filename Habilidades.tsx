import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp } from '@/lib/motion';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16 pb-16 border-b border-white/[0.06]">
            {/* Logo block */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border border-white/25 flex items-center justify-center">
                  <span className="text-xs font-bold tracking-widest text-white">LB</span>
                </div>
                <span className="text-sm font-semibold tracking-[0.12em] text-white uppercase">Lucas Barcela</span>
              </div>
              <p className="text-xs text-white/30 font-light max-w-xs leading-relaxed">
                Candidato a vaga em tecnologia e automação comercial. Soledade, RS.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.nav variants={fadeUp} className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-[11px] tracking-[0.15em] uppercase text-white/35 hover:text-white/70 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </motion.nav>
          </div>

          {/* Bottom row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-[11px] text-white/20 tracking-[0.1em]">
                &copy; {new Date().getFullYear()} Lucas Da Silva Barcela
              </span>
              <span className="hidden sm:block w-px h-3 bg-white/10" />
              <span className="hidden sm:block text-[11px] text-white/15 tracking-[0.08em]">
                Soledade, RS — Brasil
              </span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[11px] tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors duration-300 flex items-center gap-2 group"
            >
              Topo
              <div className="w-4 h-px bg-white/20 group-hover:w-8 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
