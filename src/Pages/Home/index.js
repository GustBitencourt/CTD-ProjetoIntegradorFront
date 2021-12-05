import Header from '../components/Header';
import Footer from '../components/Footer';

import Carrossel from './components/Carrossel';
import Box from './components/Box';
import Card from './components/Card';
import Card4 from './components/4-Card';

const Home = () => {
    const nomeCompanhia = 'CTD - Educational';
  
    return (
      <>
        <Header />
        <Carrossel />
        <Box />
        <Card />
        <Card4 />
        <Footer nomeCompanhia={nomeCompanhia}/>      
      </>
    );
  }
  
export default Home;