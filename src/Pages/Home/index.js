import Carrossel from './components/Carrossel';
import Valores from './components/Valores';
import { Helmet } from 'react-helmet';
import Banner from './components/Banner';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>
          CTD - Educational | Home
        </title>
      </Helmet>
      <Banner />
      <Carrossel />
      <Valores />
    </>
  );
}

export default Home;