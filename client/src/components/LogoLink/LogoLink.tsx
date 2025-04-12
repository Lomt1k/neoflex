import { Link } from 'react-router';
import './LogoLink.scss';

const LogoLink = () => {
  return (
    <Link className='logo-link' to='/'>QPICK</Link>
  )
}

export default LogoLink;