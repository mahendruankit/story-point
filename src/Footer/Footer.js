import './Footer.scss';
import imagesResource from '../Resources/images';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <a
          href='https://www.ankitmahendru.com/'
          target='_blank'
          rel='noreferrer'
        >
          <img alt='website logo' src={imagesResource.logo}></img>
        </a>
      </div>
      <div className='footer__details'>
        {new Date().getFullYear()} | Ankit Mahendru | All rights reserved | This
        website is built with&nbsp;
        <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
          <i>ReactJS</i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
