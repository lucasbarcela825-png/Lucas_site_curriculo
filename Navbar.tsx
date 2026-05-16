import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/40 font-medium">
              Candidato — Sontag / Soledade-RS
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white mb-4"
          >
            Lucas
            <br />
            <span className="text-white/25">Da Silva</span>
            <br />
            Barcela
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-xs h-px bg-white/10 my-8"
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-xl"
          >
            Familiaridade com tecnologia. Disposição para aprender.{' '}
            <br className="hidden sm:block" />
            Interesse real em automação comercial.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
          >
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white text-black text-xs tracking-[0.15em] uppercase font-bold hover:bg-white/90 transition-all duration-300"
            >
              Entrar em contato
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-medium text-white/40 hover:text-white/80 transition-colors duration-300 group"
            >
              Conhecer mais
              <div className="w-5 h-5 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <ArrowDown size={10} />
              </div>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-8 mt-16 pt-10 border-t border-white/[0.06]"
          >
            {[
              { value: '18', label: 'Anos de idade' },
              { value: 'RS', label: 'Soledade, Rio Grande do Sul' },
              { value: 'TI', label: 'Área de interesse' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs text-white/35 tracking-[0.1em] uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-8 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 text-white/20">
          <div className="w-px h-10 bg-white/10" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">
          lucasbarcela825@gmail.com
        </span>
      </motion.div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
}
