import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from './components/Carrossel';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const nomeCompanhia = 'CTD - Educational';

  return (
    <>
      <Header />
      <Carrossel />
      <Footer nomeCompanhia={nomeCompanhia}/>      
    </>
  );
}

export default App;
