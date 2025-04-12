import { Link } from 'react-router';
import { SOCIAL_INFOS } from './SocialInfo';
import './Socials.scss';

const Socials = () => {
  return (
    <ul className="socials">
      {SOCIAL_INFOS.map(info => (
        <li key={info.link}>
          <Link
            className='socials__link'
            to={info.link}
            aria-label={info.ariaLabel}
            target='_blank'
          >
            {info.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Socials;