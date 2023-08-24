import React, { useState, useEffect } from 'react';
import "./Home.css";
import { CARDDATA } from '../Card';
import { SliderHome } from '../Slider';
import { ImageSection } from '../Card';
import { BoxImages } from '../Card';
import { TestimonialCard } from '../Card';
import { BlogContent } from '../Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';


export const Home = () => {

    const [loader, setLoader] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;

        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / winHeight) * 100;

        setScrollToTop(scrolled);
    }

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const gradientColor = `conic-gradient(#F35C27 ${scrollToTop}%, #d7d7d7 ${scrollToTop}%)`;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
    }

    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
    }

    const settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
    }

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 500)
        AOS.init();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <div>
            {loader ? (<div className='loader'>
                <div data-aos="zoom-in" className='loading'></div>
            </div>) :
                (<div className='container-fluid'>
                    {/* section-1 */}
                    <section>
                        <div className='row'>
                            <div className='section1-img-block col-12'>
                                {/* <div data-aos="fade-up" className=''> */}
                                {/* </div>   */}
                                <div data-aos="fade-up" className='section1-text-block mb-5 pb-5'>
                                    <p className='section1-content-1 mt-5 pt-5 mx-5 mb-0'><span className='dot'>.</span> WE PROVIDE BEST SATISFIED WORK</p>
                                    <p className='section1-tag-1 mx-5 mb-0'>We turn vision</p>
                                    <p className='section1-tag-2 mx-5'>Factory Solutions</p>
                                    <p className='section1-tag-3 mx-5'>Industrial Revolution, in modern history, the process of change from an agararian <br></br> and handicraft economy to one dominated by industry  and machine manufacturing.</p>
                                    <Link to='/about'><button className='btn btn-primary learn-more-btn mt-5 mx-5'>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* section-2 */}

                    <section>
                        <div className='row card-section px-5'>
                            {
                                CARDDATA.map((data) => {
                                    return (

                                        <div className='card col-sm-12 col-md-6 col-lg-3 section2-card mt-3 mx-3'>
                                            <div className='card section2-card-2'>
                                                <div className='card-img-block mt-4 mx-4'>
                                                    <img className='card-img' src={data.imgSrc} alt='cardImage'></img>
                                                </div>
                                                <h5 className='section2-card-title mt-3 mx-4'>{data.title}</h5>
                                                <p className='section2-card-content mt-3 mx-4 mb-5'>{data.content}</p>
                                                <div className='card-corner-section'></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-3 */}

                    <div className='progress' onClick={goToTop} style={{ background: gradientColor }}>
                        <span className='progress-value'><i class="fas fa-arrow-up about-arrow-up"></i></span>
                    </div>

                    <section>
                        <div className='row mt-5 mx-4'>

                            <div data-aos="fade-right" className='col-sm-12 col-lg-6 mt-5 pt-5'>
                                <img className='section2-about-img' src="./about.png" alt='aboutImage'></img>
                            </div>
                            <div data-aos="fade-left" className='col-sm-12 col-lg-6 mt-5 pt-5 px-5'>
                                <h5 className='section3-header mt-5'>WELCOME TO INDUSTRIX</h5>
                                <p className='section3-title mt-4'>Great Experience for Industrial Solutions</p>
                                <p className='section3-content mx-4 mt-5'>Industrix is a leading international infrastructure group. They finance, develop, build and maintain innovative and efficient infrastructure that underpins daily life.</p>
                                <p className='section3-content-2 mt-4 mx-2'>It provides infrastructure consultancy, facilities management, property management, energy and healthcare services.The key sectors served include education, health and defence.</p>
                                <Link to="/about"><button className='btn btn-primary about-more-btn mt-5'>About More</button></Link>
                            </div>
                        </div>
                    </section>

                    {/* section-4 */}

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
                                                    <div className='card slider-card-home px-5 pb-4'>
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

                    {/* section-5 */}

                    <section>
                        <div className='row'>
                            {
                                ImageSection.map((data, i) => {
                                    return (
                                        <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 section5'>
                                            <div>
                                                <img className='section5-img' src={data.imgSrc} alt='img' key={i}></img>
                                                <div className='hover-info'>
                                                    <h5 className='section5-img-header'>{data.header}</h5>
                                                </div>
                                                <div className='section5-border-bottom'>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-6 */}

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

                    {/* section-7 */}

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

                    {/* section-8 */}

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

                    {/* section-9 */}

                    <section>
                        <div className='row mb-5 px-5'>
                            <div className='col-sm-12 col-md-12 col-lg-6 px-0'>
                                <h5 className='section7-header mt-5'>BLOG</h5>
                                <h2 className='section7-sub-header'>What <b >happen</b> inside our <b>Company</b></h2>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-6'></div>
                            {
                                BlogContent.map((data) => {
                                    return (
                                        <div data-aos="fade-right" className='col-sm-12 col-md-6 col-lg-4 mb-5'>
                                            <div className='card blog-card'>
                                                <img className='blog-img' src={data.imgSrc} alt='Blog img'></img>
                                                <div className='blog-data text-center'>
                                                    <span className='mt-3'>{data.day}</span> <br></br>
                                                    <span>{data.month}</span>
                                                </div>
                                                <div className='card-body'>
                                                    <p className='blog-head px-3'>Admin | 07 Comments </p>
                                                    <p className='blog-topic mt-4 px-3'>{data.topic}</p>
                                                    <p className='blog-content mt-3 px-3'>{data.content}</p>

                                                    <div className='mt-4'>
                                                        <i class="fas fa-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* section-10 */}

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
