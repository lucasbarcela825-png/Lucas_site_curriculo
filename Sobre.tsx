import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer } from '@/lib/motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  );
}
