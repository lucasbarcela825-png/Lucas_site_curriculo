import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'lucasbarcela825@gmail.com',
    href: 'mailto:lucasbarcela825@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(54) 99327-6174',
    href: 'tel:+5554993276174',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Soledade, RS — Brasil',
    href: null,
  },
];

export default function Contato() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contato" ref={ref} className="relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">05</span>
            <div className="w-12 h-px bg-white/15" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/30 font-medium">Contato</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
                Vamos conversar
                <br />
                <span className="text-white/30">sem burocracia.</span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed font-light max-w-md mb-12">
                Se você está avaliando meu perfil e quer saber mais, o melhor caminho é o contato direto. Estou disponível por e-mail ou telefone.
              </p>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 border border-white/[0.08] p-5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors duration-300">
                      <item.icon size={15} className="text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-white/70 font-light">{item.value}</span>
                      )}
                    </div>
                    {item.href && (
                      <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Big CTA block */}
            <motion.div variants={fadeUp} className="flex flex-col justify-between">
              <div className="border border-white/[0.08] p-8 md:p-10 flex-1 flex flex-col justify-between hover:border-white/15 transition-colors duration-300">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-6">Candidatura</p>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-6">
                    Candidato à vaga na
                    <br />
                    <span className="text-white/40">Sontag, Soledade-RS</span>
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light mb-8">
                    Estou me candidatando a uma oportunidade de entrada na área de tecnologia e automação comercial. Não preciso de convencimento — estou disponível para uma conversa rápida quando for conveniente.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Disponibilidade imediata',
                      'Disposição para aprender qualquer sistema',
                      'Comprometimento com o processo',
                      'Interesse genuíno na área',
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/30 flex-shrink-0" />
                        <span className="text-xs text-white/45 font-light">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 mt-10 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:lucasbarcela825@gmail.com"
                    className="flex-1 px-6 py-3.5 bg-white text-black text-xs tracking-[0.15em] uppercase font-bold text-center hover:bg-white/90 transition-all duration-300"
                  >
                    Enviar e-mail
                  </a>
                  <a
                    href="tel:+5554993276174"
                    className="flex-1 px-6 py-3.5 border border-white/20 text-white text-xs tracking-[0.15em] uppercase font-medium text-center hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                  >
                    Ligar agora
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
