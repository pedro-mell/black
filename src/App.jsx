import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Planos from './components/Planos/Planos'; 
import Beneficios from './components/Beneficios/Beneficios';
import Cta from './components/Cta/Cta';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Planos /> {/* <-- Componente inserido */}
      <Beneficios/>
      <Cta/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
