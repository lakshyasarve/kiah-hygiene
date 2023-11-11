import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './WhyKiah.css'

const WhyKiah = () => {
  return (
    <div className='container'>
        <div className="why-kiah-heading">
      <p className='why-kiah-sub-heading'>Why Kiah Hygiene</p>
      <p className='why-kiah-sub-sub-heading'>Make the switch to a new era in Adult Care with Kiah Hygiene </p>
      </div>
      <section className='flex features-section'>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/home-features/home-feature-1.png" alt="" />
                <p>Ultra Thin</p>
            </div>
            <div className="feature-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            </div>
        </div>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/home-features/home-feature-2.png" alt="" />
                <p>Breathable top sheet</p>
            </div>
            <div className="feature-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            </div>
        </div>
        <div className='single-feature'>
            <div className="flex feature-heading">
                <img src="/images/home-features/home-feature-3.png" alt="" />
                <p>Unscented</p>
            </div>
            <div className="feature-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default WhyKiah
