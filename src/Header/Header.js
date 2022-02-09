import { FaGithub } from 'react-icons/fa';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      Story Point
      <div className='header__github'>
        <a
          href='https://github.com/mahendruankit/story-point'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Header;
