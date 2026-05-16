import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Habilidades from '@/components/Habilidades';
import Diferenciais from '@/components/Diferenciais';
import Objetivos from '@/components/Objetivos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Diferenciais />
        <Objetivos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
