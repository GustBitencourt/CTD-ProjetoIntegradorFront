import './style.scss';

const Footer = () => {
    const nomeCompanhia = 'CTD - Educational';

    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <footer id="footer">
            <h3><span className="info-name">{nomeCompanhia}</span> - Todos os direitos reservados. &copy;  {generateDateString()}</h3>
        </footer>
    )
}

export default Footer;