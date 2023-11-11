import React from 'react'
import './NewsletterSectionHomepage.css'


const NewsletterSectionHomepage = () => {
  return (
    <div className='container newsletter-homepage'>
      <p className='newsletter-homepage-heading'>Join our Newsletter</p>
      <p className='newsletter-homepage-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      <p className='newsletter-homepage-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
      
      <div className="newsletter-form">
      <form>
        <input type='text'placeholder='Enter Your Email Address' />
        <button>Subscribe</button>
      </form>
      </div>
    </div>
  )
}

export default NewsletterSectionHomepage
