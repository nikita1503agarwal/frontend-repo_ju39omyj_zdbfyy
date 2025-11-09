import Header from './components/Header';
import Hero from './components/Hero';
import { About, Services, Projects, Contact } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-[#21302C] bg-white" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* Why Choose, Process, Testimonials, Insights could be added in iterations */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
