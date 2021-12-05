import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from './components/Carrossel';
import Caard from './components/Card';
import Caard4 from './components/4-Card';
import Box from './components/Box';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const nomeCompanhia = 'CTD - Educational';

  return (
    <>
      <Header />
      <Carrossel />
      <Box />
      <Caard />
      <Caard4 />
      <Footer nomeCompanhia={nomeCompanhia}/>      
    </>
  );
}

export default App;
