import Container from '../Container/Container';
import LogoLink from '../LogoLink/LogoLink';
import Socials from '../Socials/Socials';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <LogoLink />
          <div>FOOTER NAV (TODO)</div>
          <Socials />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;