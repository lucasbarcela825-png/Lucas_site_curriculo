import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Sobre() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" ref={ref} className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">01</span>
            <div className="w-12 h-px bg-white/15" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 font-medium">Sobre Mim</span>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Main text */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Direto ao ponto,
                <br />
                <span className="text-white/30">sem rodeios.</span>
              </h2>

              <div className="space-y-5 text-white/55 text-base leading-relaxed font-light">
                <p>
                  Tenho 18 anos, sou de Soledade-RS e estou buscando minha primeira oportunidade na área de tecnologia e automação comercial.
                </p>
                <p>
                  Tenho facilidade natural com sistemas, computadores e ferramentas digitais. Aprendo novas tecnologias com rapidez e me adapto bem a ambientes que exigem atenção e organização.
                </p>
                <p>
                  Não tenho experiência profissional formal, e não vejo isso como um problema — vejo como ponto de partida. O que trago é disposição real para trabalhar, vontade de crescer dentro de uma empresa e comprometimento com o que me é confiado.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs tracking-[0.15em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span>Entre em contato</span>
                  <div className="w-6 h-px bg-white/30 group-hover:w-10 transition-all duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Right: Info cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'Localização',
                  value: 'Soledade, RS',
                  sub: 'Brasil',
                },
                {
                  label: 'Disponibilidade',
                  value: 'Imediata',
                  sub: 'Período integral',
                },
                {
                  label: 'Área de interesse',
                  value: 'Tecnologia',
                  sub: 'Automação Comercial',
                },
                {
                  label: 'Perfil',
                  value: 'Júnior',
                  sub: 'Entrada e crescimento',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/[0.08] p-6 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-medium block mb-3">
                    {item.label}
                  </span>
                  <span className="text-lg font-semibold text-white block leading-tight">{item.value}</span>
                  <span className="text-xs text-white/35 mt-1 block">{item.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
