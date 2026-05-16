import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const skills = [
  {
    category: 'Tecnologia',
    items: [
      { name: 'Familiaridade com Computadores', level: 85 },
      { name: 'Uso de Sistemas Operacionais', level: 80 },
      { name: 'Ferramentas de Produtividade', level: 78 },
      { name: 'Internet e Pesquisa Técnica', level: 90 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Aprendizado Rápido', level: 95 },
      { name: 'Organização', level: 82 },
      { name: 'Comunicação', level: 78 },
      { name: 'Comprometimento', level: 92 },
    ],
  },
];

const tags = [
  'Adaptabilidade',
  'Tecnologia',
  'Automação Comercial',
  'Sistemas',
  'Organização',
  'Atenção ao detalhe',
  'Suporte técnico',
  'Produtividade',
  'Aprendizado contínuo',
  'Trabalho em equipe',
  'Pontualidade',
  'Proatividade',
];

export default function Habilidades() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="habilidades" ref={ref} className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">02</span>
            <div className="w-12 h-px bg-white/15" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 font-medium">Habilidades</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: title */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
                O que eu
                <br />
                <span className="text-white/30">trago para</span>
                <br />
                a equipe.
              </h2>
              <p className="text-white/45 text-base leading-relaxed font-light max-w-sm">
                Habilidades técnicas e comportamentais que contribuem desde o primeiro dia — com espaço para evoluir continuamente.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-white/[0.08] text-[10px] tracking-[0.1em] uppercase text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: skill bars */}
            <motion.div variants={fadeUp} className="space-y-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium mb-6">
                    {group.category}
                  </h3>
                  <div className="space-y-5">
                    {group.items.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} isInView={isInView} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  isInView,
}: {
  skill: { name: string; level: number };
  isInView: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/60 font-light">{skill.name}</span>
        <span className="text-xs text-white/25 font-medium">{skill.level}%</span>
      </div>
      <div className="h-px bg-white/[0.08] relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-white/50"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}
