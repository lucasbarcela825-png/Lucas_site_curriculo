import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';

const objectives = [
  {
    number: '01',
    title: 'Aprender o negócio de dentro',
    description:
      'Entender como a Sontag opera, quais sistemas utiliza e onde posso ser mais útil. Antes de qualquer coisa, é necessário entender o ambiente.',
  },
  {
    number: '02',
    title: 'Desenvolver habilidades técnicas aplicadas',
    description:
      'Aprender as ferramentas, softwares e fluxos utilizados na empresa. Cada conhecimento técnico adquirido é um problema futuro que já tem solução.',
  },
  {
    number: '03',
    title: 'Ser referência em confiabilidade',
    description:
      'Não pretendo ser o mais experiente no início — pretendo ser o mais confiável. Quem entrega consistente ganha espaço naturalmente.',
  },
  {
    number: '04',
    title: 'Crescer dentro da empresa',
    description:
      'Não busco um emprego temporário. Busco um lugar para construir uma trajetória. Crescer junto com a Sontag é o objetivo de médio e longo prazo.',
  },
];

export default function Objetivos() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="objetivos" ref={ref} className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">04</span>
            <div className="w-12 h-px bg-white/15" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 font-medium">Objetivos Profissionais</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUp} className="mb-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              O que planejo
              <br />
              <span className="text-white/30">construir aqui.</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed font-light">
              Objetivos concretos, em ordem de prioridade. Sem abstração, sem evasivas.
            </p>
          </motion.div>

          {/* Objectives list */}
          <div className="space-y-0">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.number}
                variants={fadeUp}
                className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-8 border-t border-white/[0.06] hover:bg-white/[0.01] transition-colors duration-300 group ${
                  index === objectives.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="flex items-center gap-4 md:w-24 flex-shrink-0">
                  <span className="text-xs font-bold text-white/20 tracking-[0.15em]">{obj.number}</span>
                  <ArrowRight
                    size={12}
                    className="text-white/10 group-hover:text-white/30 group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light max-w-lg">
                    {obj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            variants={fadeUp}
            className="mt-16 border border-white/[0.08] p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/15 transition-colors duration-300"
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-3">Próximo passo</p>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                Pronto para começar.
                <br />
                <span className="text-white/35">Esperando uma oportunidade.</span>
              </h3>
            </div>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 px-8 py-3.5 bg-white text-black text-xs tracking-[0.15em] uppercase font-bold hover:bg-white/90 transition-all duration-300"
            >
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
