import { FC, ReactNode } from 'react';
import './HeaderLink.scss';
import { Link } from 'react-router';

type HeaderLinkProps = {
  to: string;
  ariaLabel: string;
  counter: number;
  icon: ReactNode;
}

const HeaderLink: FC<HeaderLinkProps> = ({ to, ariaLabel, counter, icon }) => {
  return (
    <Link className='header-link' to={to} aria-label={ariaLabel}>
      {icon}
      {counter > 0 && <span className="header-link__counter">{counter}</span>}
    </Link>
  )
}

export default HeaderLink;