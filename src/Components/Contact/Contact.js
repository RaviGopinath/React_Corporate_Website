import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import './Contact.css';
import { useForm } from 'react-hook-form';

export const Contact = () => {

    const [contactLoader, setLoader] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(0);

    const {register, handleSubmit, formState : { errors }} = useForm();  

    const goToTop = () =>{
        window.scrollTo({top : 0, behavior : "smooth"});
    }

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / winHeight) * 100;
        setScrollToTop(scrolled);
    }

    const gradientColor = `conic-gradient(#F35C27 ${scrollToTop}%, #d7d7d7 ${scrollToTop}%)`;

    const onSubmit = (event)=>{
        event.preventDefault();
    }

    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
        },500);
        AOS.init();
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll);
    },[])


    return (
        <div>
            { contactLoader ? (<div className='loader'>
                <div data-aos="zoom-in" className='loading'></div>
            </div>) :
        (<div className="container-fluid">

            {/* section-1 */}
            <section>
                <div class="breadcrumb-area dark-bg">
                    <div class="breadcrumb-inner">
                        <h2 class="page-header text-white">Contact Us</h2>
                        <h6 class="text-white mt-4"><Link className='about-home' to="/home">Home</Link> <span className='about-breadcrumb'> / Contact Us</span></h6>
                    </div>
                </div>
            </section>

            {/* section-2 */}

            <div className='progress' onClick={goToTop} style={{background : gradientColor}}>
                        <span className='progress-value'><i class="fas fa-arrow-up about-arrow-up"></i></span>
            </div>

            <section>

                <div className="row mt-5 px-5 mb-5">

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <iframe width="100%" height="650" title="Focusbytes" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WorkFlo,Greeta%20Tech%20Park,Phase%201,%20No.99-OMR,Industrial%20Estate,%20Perungudi,%20Chennai-600096+(Focusbytes)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 contact-section2-form-block">
                        <h2 className="contact-form-header px-5 pt-5">Lets talk...</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row px-5">

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="contact-form-label">Your Name*</label>
                                    <input {...register ("name", {required : "Please Enter Your Name"})} className="form-control contact-form-input mb-2" type="text" placeholder="Your Full Name"></input>
                                    {errors?.name && <p className="error-msg text-danger">{errors.name.message}</p>}
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="contact-form-label">Email Address*</label>
                                    <input {...register ("email", {required : "Please Enter Your Email"})} className="form-control contact-form-input mb-2" type="email" placeholder="E-Mail Address"></input>
                                    {errors?.email && <p className="error-msg text-danger">{errors.email.message}</p>}
                                </div>

                                <div className="col-12">
                                    <label className="contact-form-label">Subject*</label>
                                    <input {...register ("subject", {required : "Please Enter the Subject"})} className="form-control contact-form-input mb-2" type="text" placeholder="Your Full Name"></input>
                                    {errors?.subject && <p className="error-msg text-danger">{errors.subject.message}</p>}
                                </div>

                                <div className="col-12">
                                    <label className="contact-form-label">Message*</label>
                                    <textarea {...register ("messages", {required : "Please Enter your Message"})} className="contact-form-textarea contact-form-input mb-2" placeholder="Write Here"></textarea>
                                    {errors?.messages && <p className="error-msg text-danger">{errors.messages.message}</p>}
                                </div>

                                <div>
                                    <button className="btn btn-primary contact-form-button">SEND NOW</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </section>

            {/* section-3 */}

            <section>
                <div className="row px-5 mb-5">

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
                        <div className="card contact-card">
                            <div className="font-block mt-5">
                                <i class="fas fa-map-marker-alt contact-card-icon"></i>
                            </div>
                            <p className="contact-card-content text-center px-5 mt-3 mb-3">Industrial Estate, Perungudi,<br></br> Chennai-600096</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
                        <div className="card contact-card">
                            <div className="font-block mt-5">
                                <i class="fas fa-envelope contact-card-icon"></i>
                            </div>
                            <p className="contact-card-content text-center px-5 mt-3 mb-3">info@focusbytes.com</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
                        <div className="card contact-card">
                            <div className="font-block mt-5">
                                <i class="fas fa-phone-alt contact-card-icon"></i>
                            </div>
                            <p className="contact-card-content text-center px-5 mt-3 mb-3">+91 9994171128</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* section-4 */}

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