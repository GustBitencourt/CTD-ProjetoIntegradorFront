import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from './components/Carrossel';
import Caard from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const nomeCompanhia = 'CTD - Educational';

  return (
    <>
      <Header />
      <Carrossel />
      <Caard />
      <Footer nomeCompanhia={nomeCompanhia}/>      
    </>
  );
}

export default App;
