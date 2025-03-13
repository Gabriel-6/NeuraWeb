import './App.css';
import Atendimentos from './components/Atendimentos';
import Beneficios from './components/Beneficios';
import Footer from './components/Footer';
import Header from './components/Header';
import Planos from './components/Planos';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <Sobre />
      <Planos />
      <Atendimentos />
      <Beneficios />
      
      <Footer />
    </div>
  );
}

export default App;
