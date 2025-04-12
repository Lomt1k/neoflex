import { NavLink } from 'react-router';
import { FOOTER_NAV_INFOS } from './FooterNavInfo';
import IconLanguage from '../../assets/icons/Language.svg?react';
import './FooterNav.scss';
import LanguageButton from './LanguageButton';

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <ul className="footer-nav__list">
        {FOOTER_NAV_INFOS.map(info => (
          <li key={info.text}>
            <NavLink className='footer-nav__link' to={info.link}>
              {info.text}
            </NavLink>
          </li>
        ))}
        <li className='footer-nav__language'>
          <IconLanguage aria-hidden={true} />
          <LanguageButton active>Рус</LanguageButton>
          <LanguageButton>Eng</LanguageButton>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav;