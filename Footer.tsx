import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Zap, LayoutGrid, Shield, TrendingUp, Clock, BookOpen } from 'lucide-react';

const cards = [
  {
    icon: Zap,
    title: 'Aprendizado acelerado',
    description:
      'Absorvo informação nova com facilidade e coloco em prática rapidamente. Tempo de adaptação reduzido, resultado mais rápido.',
  },
  {
    icon: LayoutGrid,
    title: 'Organização e método',
    description:
      'Trabalho com atenção ao processo. Não improviso onde não precisa. Mantenho ordem nas tarefas e clareza no que foi feito.',
  },
  {
    icon: Shield,
    title: 'Confiabilidade',
    description:
      'Comprometo com o que aceito e entrego dentro do prazo. Não faço promessas que não consigo cumprir.',
  },
  {
    icon: TrendingUp,
    title: 'Potencial de crescimento',
    description:
      'Início de carreira significa menos vícios e mais abertura. Cresço junto com a empresa, sem carregar hábitos ruins de outros lugares.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade total',
    description:
      'Disponível para dedicação integral, sem restrições de horário. Foco total na função desde o primeiro dia.',
  },
  {
    icon: BookOpen,
    title: 'Interesse genuíno',
    description:
      'Tecnologia e automação não são só trabalho — são áreas que acompanho por escolha própria. Isso faz diferença na qualidade do engajamento.',
  },
];

export default function Diferenciais() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="diferenciais" ref={ref} className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">03</span>
            <div className="w-12 h-px bg-white/15" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 font-medium">Diferenciais</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Por que contratar
              <br />
              <span className="text-white/30">sem experiência</span>
              <br />
              pode ser a decisão certa.
            </h2>
            <p className="text-white/45 text-base leading-relaxed font-light">
              Perfil de entrada com características que costumam aparecer apenas em profissionais mais sênior.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={index}
                className="border border-white/[0.08] p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-9 h-9 border border-white/15 flex items-center justify-center group-hover:border-white/35 transition-colors duration-300">
                    <card.icon size={16} className="text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
