import Container from "../Container/Container";
import LogoLink from "../LogoLink/LogoLink";
import HeaderLinkBasket from "./HeaderLinkBasket";
import HeaderLinkFavorites from "./HeaderLinkFavorites";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <LogoLink />
          <div className="header__links">
            <HeaderLinkFavorites />
            <HeaderLinkBasket />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;