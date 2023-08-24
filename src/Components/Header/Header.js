import React, { useState, useEffect } from 'react';
import "./Header.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {

  const [toggleInfo, setToggleInfo] = useState(false);
  const [mobileToggel, setMobileToggle] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const headerScroll = () => {
    if (window.scrollY > 0) {
      setIsFixedHeader(true);
    }
    else {
      setIsFixedHeader(false);
    }
  }

  const showToggle = () => {
    setToggleInfo(true);
  }

  const closeToggle = () => {
    setToggleInfo(false);
  }

  const showMobileToggle = () => {
    setMobileToggle(true)
  }

  const closeMobileToggle = () => {
    setMobileToggle(false);
  }

  const toggleSearchBar = (event) => {
    event.stopPropagation();
    setShowSearchBar(true);
  }

  const closeSearchBar = () => {
    setShowSearchBar(false);
  }

  const scrollingHeader = isFixedHeader ? "fixed-header" : "header-card";

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", headerScroll);
    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, [])

  return (
    <div className='container-fluid'>

      {/* mobile-header */}

      <div className='row d-block d-lg-none'>
        <div className='mobile-card'>
          <div>
            <img className='px-3' src='./logo.png' alt='Logo'></img>
          </div>
          <div>
            <i class="fas fa-bars px-3" onClick={showMobileToggle}></i>
          </div>
        </div>
      </div>

      {mobileToggel && <div data-aos="fade-right" className='mobile-toggle'>
        <div className='close-btn mt-3'>
          <i class="fas fa-times" onClick={closeMobileToggle}></i>
        </div>
        <NavLink className="nav-tabs-sm px-3" onClick={closeMobileToggle} to="./home">Home</NavLink><br></br>
        <NavLink className="nav-tabs-sm px-3" onClick={closeMobileToggle} to="./about">About Us</NavLink><br></br>
        <NavLink className="nav-tabs-sm px-3" onClick={closeMobileToggle} to="./service">Service</NavLink><br></br>
        <NavLink className="nav-tabs-sm px-3" onClick={closeMobileToggle} to="./project">Projects</NavLink><br></br>
        <NavLink className="nav-tabs-sm px-3" onClick={closeMobileToggle} to="./contact">Contact</NavLink><br></br>
      </div>}

      {/* Pre-header */}

      <div className='row d-none d-lg-block'>
        <div className='pre-header'>
          <div>
            <i class="fas fa-envelope header-envelop"></i> <span className='mx-1'>info@focusbytes.com</span>
            <div className='horizontal-line mx-2'></div>
            <span><i class="fas fa-map-marker-alt mx-1"></i> Perungudi, Chennai</span>
          </div>
          <div>
            <span className='mx-3'>Turning big ideas into great products!</span>
            <div className='pre-header-icons'>
              <i class="fab fa-facebook-f mx-2"></i>
              <i class="fab fa-instagram mx-2"></i>
              <i class="fab fa-twitter mx-3"></i>
              <i class="fab fa-skype"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Search field */}

      {/* {showSearchBar && <div data-aos="fade-down" className='search-area'>

        <div className='search-section-1'>
          <div className='mt-4 px-5'>
            <p className='top-search-content'>Search for anything.</p>
          </div>
          <div className='mt-4 px-5'>
            <span onClick={closeSearchBar} className='search-close-arrow'>x</span>
          </div>
        </div>

        <div className='form-group px-5 pb-5'>
          <form>
            <input type='search' className='search-area-input' placeholder='Search...' required></input>
            <button type='submit' className='search-area-button px-5'><i class="fas fa-search search-area-icon mx-3"></i></button>
          </form>
        </div>
      </div>} */}

      {showSearchBar && <Modal className='search-modal' show={toggleSearchBar} onHide={closeSearchBar} fullscreen>
        <Modal.Body className="custom-modal-body">
          <div data-aos="fade-down" className='search-area'>

            <div className='search-section-1'>
              <div className='mt-4 px-5'>
                <p className='top-search-content'>Search for anything.</p>
              </div>
              <div className='mt-4 px-5'>
                <span onClick={closeSearchBar} className='search-close-arrow'>x</span>
              </div>
            </div>

            <div className='form-group px-5 pb-5'>
              <form>
                <input type='search' className='search-area-input' placeholder='Search...' required></input>
                <button type='submit' className='search-area-button px-5'><i class="fas fa-search search-area-icon mx-3"></i></button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>}

      {/* Header */}

      <div className='row d-none d-lg-block'>
        <div className='col-12 card'>
          <div className={`header ${scrollingHeader}`}>
            <div>
              <img src='./logo.png' alt='Logo'></img>
            </div>
            <div className="nav-links">
              <NavLink className='nav-tags-lg mx-3' to="/home">Home</NavLink>
              <NavLink className='nav-tags-lg mx-3' to="/about">About Us</NavLink>
              <NavLink className='nav-tags-lg mx-3' to="/service">Services</NavLink>
              <NavLink className='nav-tags-lg mx-3' to="/project">Project</NavLink>
              <NavLink className='nav-tags-lg mx-3' to="/contact">Contact</NavLink>
            </div>
            <div>
              <i onClick={(event) => toggleSearchBar(event)} class="fas fa-search mx-3"></i>
              <i class="fas fa-bars mx-3" onClick={showToggle}></i>
            </div>
          </div>


          {toggleInfo && <div data-aos="fade-left" className='header-info'>
            <div className='close-btn mt-3'>
              <i class="fas fa-times" onClick={closeToggle}></i>
            </div>
            <div className='toggle-img-block'>
              <img src='./logo-white.png' alt='Logo'></img>
            </div>
            <div className='toggle-about-section text-start mx-3 mt-4'>
              <h3>About Us</h3>
              <p>We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed accounts of the system and expound.</p>
            </div>

            <div className='mt-4'>
              <button className='btn btn-primary toggle-btn mx-3'>Get In Touch</button>
            </div>
            <div className='toggle-contact-section text-start mx-3 mt-4'>
              <h3>Contact Info</h3>
              <p className='mt-4'><i class="fas fa-rocket mx-1"></i> OMR, Industrial Estate, Perungudi, Chennai</p>
              <p><i class="fas fa-phone-alt mx-1"></i> +91 9994171128</p>
              <p><i class="fas fa-envelope mx-1 pb-3"></i> info@focusbytes.com</p>
            </div>
          </div>}

        </div>
      </div>
    </div>
  )
}
