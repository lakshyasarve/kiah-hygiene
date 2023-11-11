import React from 'react'
import "./Navigaton.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <div className='top-discount-banner'>
      This Diwali Get Exciting Discount Use Code <div className='discount-bold'>KIAH20</div> for 20% Off
    </div>
    <section className='header-content container '>
      <div className='flex nav-menu'>
      <img src="/Kiah_Hygiene_logo.png" className='kiah-nav-logo' alt="" />
      <div className='nav-links-centered'>
      <nav>
          <ul className='flex hover-links nav-links'>  
            <Link to='/'><li>Home</li></Link>
            <Link to='/product'><li>Products</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/about-us'><li>About us</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
          </ul>
        </nav>
      </div>
      </div>
      
      <div className='flex other-menu'>
        
        <button className='nav-links secondary-button'>
          Sign In
        </button>
        <button className='nav-links primary-button'>
          Create Account
        </button>
        <div>
          <SearchIcon className='nav-icon'></SearchIcon>
        </div>
        <div className='flex'>
        <ShoppingBagOutlinedIcon className='nav-icon'/>
        <p className='cart-value'>0</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Navigation
