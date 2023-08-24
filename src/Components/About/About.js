import React, { useState, useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { SliderHome } from '../Slider';
import { BoxImages } from '../Card';
import { AboutTeam } from '../Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';

export const About = () => {

    const [aboutLoader, setLoader] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;

        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / winHeight) * 100;

        setScrollToTop(scrolled);
    }

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false)
        }, 500);
        AOS.init();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const goToTop = () =>{
        window.scrollTo({top : 0, behavior : "smooth"});
    }

    const gradientColor = `conic-gradient(#F35C27 ${scrollToTop}%, #d7d7d7 ${scrollToTop}%)`;

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots'
    }

    const settings2 = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots',
    }

    const settings3 = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        dotsClass: 'slick-dots',
    }

    return (
        <div>
            {aboutLoader ? (<div className='loader'>
                <div data-aos="zoom-in" className='loading'></div>
            </div>) :
                (<div className='container-fluid'>
                    {/* section-1 */}

                    <section>
                        <div class="breadcrumb-area dark-bg">
                            <div class="breadcrumb-inner">
                                <h2 class="page-header text-white">About Us</h2>
                                <h6 class="text-white mt-4"><Link className='about-home' to="/home">Home</Link> <span className='about-breadcrumb'> / About Us</span></h6>
                            </div>
                        </div>
                    </section>

                    {/* section-2 */}

                    <section className='mt-5'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 about-section2 mt-5 px-5'>
                                <img className='about-section2-img' src="./about-1.png" alt='about img'></img>
                                <div className='about-box text-center'>
                                    <img className='about-factory' src="./factory.png" alt='factory'></img> <br></br>
                                    <span>Founded in 1995</span>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5 px-5'>
                                <h5 className='about-section2-header mt-4'>ABOUT US</h5>
                                <p className='about-section2-sub-header'>We're leading <b>Industrial Solutions</b> in Worldwide</p>
                                <p className='about-section2-content mt-4'>We are build construction site lorem ipsum dolor sit amet, consectetur elit. Ea enim et, similique,minus soluta ducimus. The Most Eminent factory and Industrial Consultant service provider. Branches in USA and overseas.</p>
                                <p className='about-section2-content mt-4'>industrix is famous construction factory to build a company that can compete with large construction firms while operating with the flexibility and customer-focus of a small, family-run business.</p>
                                <div className='about-section2-checkboxes mt-5'>
                                    <div>
                                        <p><i class="far fa-check-square"></i> Best Industrial</p>
                                        <p><i class="far fa-check-square mt-2"></i> Expert Contractor</p>
                                    </div>
                                    <div className='mx-5 px-5'>
                                        <p><i class="far fa-check-square"></i> Quality Construction</p>
                                        <p><i class="far fa-check-square mt-2"></i> Affordable Cost Rate</p>
                                    </div>
                                </div>

                                <div className='about-section2-bottom mt-5'>
                                    <div className='about-section2-mobile-block text-center'>
                                        <i class="fas fa-phone-alt about-fa-phone-alt"></i>
                                    </div>
                                    <div className='mx-3'>
                                        <h5>Call Us Anytime</h5>
                                        <h6>+91 9994171128</h6>
                                    </div>
                                    <div className='px-5'>
                                        <button onClick={goToTop} className='btn btn-primary about-learnMore-btn'>Learn More</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className='progress' onClick={goToTop} style={{background : gradientColor}}>
                        <span className='progress-value'><i class="fas fa-arrow-up about-arrow-up"></i></span>
                    </div>

                    {/* section-3 */}

                    <section className='mt-4'>
                        <div className='row section4-slider mt-5 mb-5 pb-5'>
                            <div className='col-sm-12 col-lg-6 pt-5 px-5'>
                                <h5 className='section4-head-tag mx-4'>WHAT WE DO</h5>
                                <p className='section4-head-tag2 mx-4'>What We Offer</p>
                            </div>
                            <div className='col-sm-12 col-lg-6  pt-5 px-5'>
                                <p className='section4-content mx-4'>Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb: the act of building, and the noun </p>
                            </div>
                            <div className='row d-none d-lg-block px-5 pb-5'>
                                <Slider {...settings}>
                                    {
                                        SliderHome.map((data, i) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4 mt-4 mb-4' key={i}>
                                                    <div className='card slider-card-home px-5'>
                                                        <div>
                                                            <img className='slider-img mt-4' src={data.imgSrc} alt='Slider-img'></img>
                                                        </div>
                                                        <h5 className='slider-header'>{data.title}</h5>
                                                        <p className='slider-content mt-4 pb-5'>{data.content}</p>
                                                        <i class="fas fa-arrow-right slider-home-arrow"></i>
                                                        <div data-aos="fade-right" className='slider-border mt-5'></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                            <div className='row d-md-none px-5 pb-5'>
                                <Slider {...settings2}>
                                    {
                                        SliderHome.map((data, i) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4 mt-4 mb-4' key={i}>
                                                    <div className='card slider-card-home px-5'>
                                                        <div>
                                                            <img className='slider-img mt-4' src={data.imgSrc} alt='Slider-img'></img>
                                                        </div>
                                                        <h5 className='slider-header'>{data.title}</h5>
                                                        <p className='slider-content mt-4 pb-3'>{data.content}</p>
                                                        <i class="fas fa-arrow-right slider-home-arrow"></i>
                                                        <div data-aos="fade-right" className='slider-border mt-5'></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                            <div className='row d-none d-md-block d-lg-none px-5 pb-5'>
                                <Slider {...settings3}>
                                    {
                                        SliderHome.map((data, i) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4 mt-4 mb-4' key={i}>
                                                    <div className='card slider-card-home px-5'>
                                                        <div>
                                                            <img className='slider-img mt-4' src={data.imgSrc} alt='Slider-img'></img>
                                                        </div>
                                                        <h5 className='slider-header'>{data.title}</h5>
                                                        <p className='slider-content mt-4 pb-3'>{data.content}</p>
                                                        <i class="fas fa-arrow-right slider-home-arrow"></i>
                                                        <div data-aos="fade-right" className='slider-border mt-5'></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                        </div>
                    </section>
                    {/* section-4 */}

                    <section>
                        <div className='row'>

                            <div className='col-sm-12 col-md-6 col-lg-4 about-section4-block-1'>
                                <h5 className='about-section4-header mt-5 mx-3 px-5'>WHY CHOOSE US</h5>
                                <h3 className='about-section4-sub-header px-5 mt-5'>We only provide top <b>industrial</b> services</h3>
                                <div className='px-5'>
                                    <button className='btn btn-primary about-knowMore-btn mt-2 mb-5'>Know More</button>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-8 about-section4-block-2 mx-0'>
                                <img className='about-section4-img' src="./choose-us.jpg" alt='choose img'></img>
                                <div class="pop-up-video">
                                    <a target='#' href="https://www.youtube.com/watch?v=SZEflIVnhH8" class="video-play-btn mfp-iframe">
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* section-5 */}


                    <section>
                        <div className='d-none d-md-block'>
                            <div className='section5-box-images'>
                                {
                                    BoxImages.map((data, index) => {
                                        return (
                                            <div className={`data ${index === BoxImages.length - 1 ? 'last-img-block  mt-5 mb-5 pb-4 mx-3' : 'box-img-block mt-5 mb-5 pb-4 mx-3'}`}>
                                                <img className='box-img mx-5' src={data.imgSrc} alt='Box Images'></img>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='d-block d-md-none text-center'>
                            <img className='mt-4' src='./duskwerk.png' alt='Box Images'></img> <br></br>
                            <img className='mt-4' src='./steel.png' alt='Box Images'></img> <br></br>
                            <img className='mt-4' src='./metals.png' alt='Box Images'></img> <br></br>
                            <img className='mt-4' src='./buro.png' alt='Box Images'></img> <br></br>
                            <img className='mt-4 mb-3' src='./gendex.png' alt='Box Images'></img>
                        </div>
                    </section>


                    {/* section-6 */}

                    <section className='team-section pt-5 pb-5'>
                        <div className='row pb-5 px-5'>
                            <h5 className='about-section6-header text-center mt-5'>OUR TEAM</h5>
                            <h2 className='about-section6-sub-header text-center mt-3'>Meet Our Proffessionals</h2>
                            {
                                AboutTeam.map((data) => {
                                    return (
                                        <div data-aos="fade-right" className='col-sm-12 col-md-6 col-lg-3 mt-3'>
                                            <div className='card team-card'>
                                                <img className='team-img' src={data.imgSrc} alt='team-img'></img>

                                                <div className='card-body'>
                                                    <h6 className='team-name text-center'>{data.name}</h6>
                                                    <p className='team-role text-center'>{data.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-7 */}

                    <section>
                        <div className='row section-10 pb-5'>

                            <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4'>
                                <img className='section10-img mt-5 mx-3' src='./logo-white.png' alt='logo'></img>
                                <p className='section10-content mt-4 mx-3'>Consectetur adipisicing elit.<br></br>
                                    maxime dolor voluptatibus natus eligendi</p>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4'>
                                <h5 className='section10-header mt-5 mx-3 pt-4'>Office</h5>
                                <p className='section10-content mt-3 mx-3'>India - <br></br> WorkFlo,Greeta Tech Park,Phase 1, No.99-OMR,Industrial Estate, Perungudi, Chennai-600096</p>
                                <p className='section10-content section10-email mt-3 mx-3'>info@focusbytes.com</p>
                                <p className='section10-content section10-phone mt-3 mx-3'>+91 9994171128</p>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-4'>
                                <h5 className='section10-header mt-5 mx-3 pt-4'>Links</h5>
                                <ul className='section10-ul px-3'>
                                    <Link to="/home" className='section10-li mt-3'>Home</Link>
                                    <Link to="/about" className='section10-li'>About</Link>
                                    <Link to="/service" className='section10-li'>Service</Link>
                                    <Link to="/project" className='section10-li'>Project</Link>
                                    <Link tp="/contact" className='section10-li'>Contact</Link>
                                </ul>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                                <h5 className='section10-header mt-5 mx-3 pt-4'>Get in Touch</h5>
                                <ul className='section10-ul px-3'>
                                    <li className='section10-li mt-3'><i class="fab fa-facebook-f section10-icons"></i> Facebook</li>
                                    <li className='section10-li mt-1'><i class="fab fa-instagram section10-icons"></i> Instagram</li>
                                    <li className='section10-li mt-1'><i class="fab fa-twitter section10-icons"></i> Twitter</li>
                                    <li className='section10-li mt-1'><i class="fab fa-skype section10-icons"></i> Skype</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>)}
        </div>
    )
}
