import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='container '>
        <section className="footer-content flex">
          <div className='footer-headline'>
            <img src="/Kiah_Hygiene_logo_footer.png" className='footer-logo' alt="" />
            <h5 className='logo-text'>It's easy to get in touch with us </h5>
            <div className=" flex">
              <EmailIcon className='footer-icon'></EmailIcon>
              <p>info@kiahhygiene.com</p>
            </div>
            <div className=" flex">
              <LocalPhoneIcon className='footer-icon'></LocalPhoneIcon>
              <p>+12 34 56 78 90</p>
            </div>
            <div className="footer-social-media-icon">
            <FacebookIcon fontSize='large'></FacebookIcon>
            <InstagramIcon fontSize='large'/>
            <LinkedInIcon fontSize='large'/>
            </div>
          </div>
          <div className="footer-menu">
         
              <nav>
                <ul className='nav-links-footer'>
                  <li>Documentation</li>
                  <li>Quick Start</li>
                  <li>Community</li>
                </ul>
              </nav>
    
              <nav>
                <ul className='nav-links-footer'>
                  <li>Privacy Policy</li>
                  <li>Terms & Condition</li>
                  <li>Faq</li>
                </ul>
              </nav>
        
          </div>
          <p className="footer-background-text">
            Kiah
            </p>
        </section>
        <section className="copyright flex">
          <p>@2023 Kiah Hygiene</p>
          <p>All Rights reserved</p>
        </section>
        </div>
      </div>
    </>
  )
}

export default Footer
