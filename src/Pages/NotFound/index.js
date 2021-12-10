import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';


const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer => --timer)
      if (timer === 0) {
        navigate('/')
      }
    }, 1000);

    return () => clearInterval(intervalId)
  }, [navigate, timer])

  return (
    <>
      <Helmet>
        <title>
          CTD - Educational | Você se Perdeu
        </title>
      </Helmet>
      <section id="banner__notfound">
        <h2>404 - Você se perdeu!</h2>
        <h3>Voltando a uma rota válida {timer}</h3>
      </section>
    </>
  )
}
export default NotFound;