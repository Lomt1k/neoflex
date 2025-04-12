import Container from '../Container/Container';
import LogoLink from '../LogoLink/LogoLink';
import FooterNav from './FooterNav';
import Socials from '../Socials/Socials';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <LogoLink />
          <FooterNav />
          <Socials />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;