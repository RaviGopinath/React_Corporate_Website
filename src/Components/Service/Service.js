import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceCards } from '../Card';
import { TestimonialCard } from '../Card';
import './Service.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import AOS from 'aos';
import {InView} from 'react-intersection-observer';

export const Service = () => {

    const [serviceLoader, setLoader] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(0);

    const onScroll = ()=>{
        const winScroll = document.documentElement.scrollTop;

        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / winHeight) * 100;
        setScrollToTop(scrolled);
    }

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
        AOS.init();
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll);
    }, [])

    const goToTop = ()=>{
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
            {serviceLoader ? (<div className='loader'>
                <div data-aos="zoom-in" className='loading'></div>
            </div>) :
                (<div className='container-fluid'>
                    {/* section-1 */}

                    <section>
                        <div class="breadcrumb-area dark-bg">
                            <div class="breadcrumb-inner">
                                <h2 class="page-header text-white">Services</h2>
                                <h6 class="text-white mt-4"><Link className='about-home' to="/home">Home</Link> <span className='about-breadcrumb'> / Services</span></h6>
                            </div>
                        </div>
                    </section>

                    {/* section-2 */}

                    <section>

                        <div className='row service-card-section pt-5 px-5 mb-5'>
                            {
                                ServiceCards.map((data) => {
                                    return (
                                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4'>
                                            <div className='card service-card'>
                                                <div className='service-img-block'>
                                                    <img className='service-img' src={data.imgSrc} alt='service-img'></img>
                                                    <div className='service-icon-block'>
                                                        <img className='service-card-icon' src={data.flatImg} alt='flat-images'></img>
                                                    </div>
                                                </div>
                                                <h5 className='service-name mt-4 px-4'>{data.name}</h5>
                                                <p className='service-content mt-4 px-4'>{data.content}</p>
                                                <p className='service-card-line px-5 mb-4'></p>
                                                <i class="fas fa-arrow-right service-arrow-right px-4 pb-4"></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </section>

                    <div className='progress' onClick={goToTop} style={{ background: gradientColor }}>
                        <span className='progress-value'><i class="fas fa-arrow-up about-arrow-up"></i></span>
                    </div>

                    {/* section-3 */}

                    <section>
                        <div className='row section8-numbers pb-5'>

                            <div className='col-sm-12 col-md-6 col-lg-3 section8-number-block mt-5 pt-5'>
                                <p className='section8-tasks pt-3 mx-5'>Project</p>
                                <InView >
                                    {({ inView, ref }) => (
                                        <div ref={ref}>
                                            {inView ? (
                                                <CountUp className='section8-counts' end={85} />
                                            ) : (
                                                // Render a placeholder or loading state if needed
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    )}
                                </InView>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 section8-number-block mt-5 pt-5'>
                                <p className='section8-tasks pt-3 mx-5'>Employee</p>
                                <InView >
                                    {({ inView, ref }) => (
                                        <div ref={ref}>
                                            {inView ? (
                                                <CountUp className='section8-counts' end={45} />
                                            ) : (
                                                // Render a placeholder or loading state if needed
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    )}
                                </InView>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 section8-number-block mt-5 pt-5'>
                                <p className='section8-tasks pt-3 mx-5'>Customers</p>
                                <InView >
                                    {({ inView, ref }) => (
                                        <div ref={ref}>
                                            {inView ? (
                                                <CountUp className='section8-counts' end={10} />
                                            ) : (
                                                // Render a placeholder or loading state if needed
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    )}
                                </InView>
                            </div>

                            <div className='col-sm-12 col-md-6 col-lg-3 section8-number-block mt-5 pt-5'>
                                <p className='section8-tasks pt-3 mx-5'>Solutions</p>
                                <InView >
                                    {({ inView, ref }) => (
                                        <div ref={ref}>
                                            {inView ? (
                                                <CountUp className='section8-counts' end={14} />
                                            ) : (
                                                // Render a placeholder or loading state if needed
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    )}
                                </InView>
                            </div>

                        </div>
                    </section>

                    {/* section-4 */}

                    <section>
                        <div className='row section7-slider text-center pt-5 px-4'>
                            <h5 className='section7-header mt-5'>TESTIMONIAL</h5>
                            <h2 className='section7-sub-header'>Happy <b >Client</b> Says <br></br> About Us</h2>

                            <div className='d-none d-lg-block'>
                                <Slider {...settings}>
                                    {
                                        TestimonialCard.map((data) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 mt-4 mb-5'>
                                                    <div className='card testimonial-card'>
                                                        <div className='quote-block'>
                                                            <i class="fas fa-quote-left mt-3"></i>
                                                        </div>
                                                        <p className='testimonial-content mt-5 px-5 text-start mb-4'>{data.content}</p>
                                                        <div className='testimonial-footer'>
                                                            <div>
                                                                <img className='testimonial-img mx-3' src={data.imgSrc} alt='Testimonial img'></img>
                                                            </div>
                                                            <div className='mx-4 mb-3 mt-2 pb-5'>
                                                                <h5 className='testimonial-name'>{data.name}</h5>
                                                                <span className='testimonial-role'>{data.role}</span>
                                                            </div>
                                                        </div>
                                                        <div className='testimonial-footer-border'>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                            <div className='d-none d-md-block d-lg-none'>
                                <Slider {...settings3}>
                                    {
                                        TestimonialCard.map((data) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 mt-4 mb-5'>
                                                    <div className='card testimonial-card mx-2'>
                                                        <div className='quote-block'>
                                                            <i class="fas fa-quote-left mt-3"></i>
                                                        </div>
                                                        <p className='testimonial-content mt-5 px-5 text-start mb-4'>{data.content}</p>
                                                        <div className='testimonial-footer'>
                                                            <div>
                                                                <img className='testimonial-img mx-3' src={data.imgSrc} alt='Testimonial img'></img>
                                                            </div>
                                                            <div className='mx-4 mb-3 mt-2 pb-5'>
                                                                <h5 className='testimonial-name'>{data.name}</h5>
                                                                <span className='testimonial-role'>{data.role}</span>
                                                            </div>
                                                        </div>
                                                        <div className='testimonial-footer-border'>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>

                            <div className='d-block d-md-none'>
                                <Slider {...settings2}>
                                    {
                                        TestimonialCard.map((data) => {
                                            return (
                                                <div className='col-sm-12 col-md-6 col-lg-3 mt-4 mb-5'>
                                                    <div className='card testimonial-card mx-2'>
                                                        <div className='quote-block'>
                                                            <i class="fas fa-quote-left mt-3"></i>
                                                        </div>
                                                        <p className='testimonial-content mt-5 px-5 text-start mb-4'>{data.content}</p>
                                                        <div className='testimonial-footer'>
                                                            <div>
                                                                <img className='testimonial-img mx-3' src={data.imgSrc} alt='Testimonial img'></img>
                                                            </div>
                                                            <div className='mx-4 mb-3 mt-2 pb-5'>
                                                                <h5 className='testimonial-name'>{data.name}</h5>
                                                                <span className='testimonial-role'>{data.role}</span>
                                                            </div>
                                                        </div>
                                                        <div className='testimonial-footer-border'>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </section>

                    {/* section-5 */}

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
