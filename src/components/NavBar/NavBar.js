import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom"
import { Link as LinkS } from 'react-scroll'
import './NavBar.css'

function NavBar({ toggle }) {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav scrollNav={scrollNav} style={{backgroundColor: `${({ scrollNav }) => (scrollNav ? '#030029' : 'transparent')}`}}>
      <div className='navbar-container'>
        <ul className='ul-list'>
          <li>
            <LinkS to='houses'
              smooth={true}
              duration={500}
              spy={true}
              // exact='true'
              offset={-250} className='link'>
              Houses
            </LinkS>
          </li>
          <li>
            <LinkS to='characters'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-200} className='link'>
              Characters
            </LinkS>
          </li>
          <li>
            <LinkS to='quotes'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={0} className='link'>
              Quotes
            </LinkS>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default NavBar