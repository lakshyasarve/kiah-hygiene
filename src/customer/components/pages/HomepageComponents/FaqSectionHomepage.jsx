import React from 'react'
import './FaqSectionHomepage.css'
import FaqComponent from './FaqComponent';

const FaqSectionHomepage = () => {
  return (
    <div className='flex container quiz-section-homepage'>
      <div className="split-container-child-1">
        <p className='faq-heading'>FAQs</p>
        <FaqComponent></FaqComponent>
      </div>
      <div className="split-container-child-2">
        <img className='faq-image' src="/images/homepage-faq-image.png" alt="" />
      </div>
    </div>
  )
}

export default FaqSectionHomepage
