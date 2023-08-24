import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './Project.css';

export const Project = () => {

    const [projectLoader, setLoader] = useState(false);
    const [scrollToTop, setScrollToTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / winHeight) * 100;
        setScrollToTop(scrolled);
    }

    const goToTop = () =>{
        window.scrollTo({top :0, behavior : "smooth"});
    }

     const gradientColor = `conic-gradient(#F35C27 ${scrollToTop}%, #d7d7d7 ${scrollToTop}%)`;

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
            {projectLoader ? (<div className='loader'>
                <div data-aos="zoom-in" className='loading'></div>
            </div>) :
        (<div className='container-fluid'>
            {/* section-1 */}
            <section>
                <div class="breadcrumb-area dark-bg">
                    <div class="breadcrumb-inner">
                        <h2 class="page-header text-white">Project Details</h2>
                        <h6 class="text-white mt-4"><Link className='about-home' to="/home">Home</Link> <span className='about-breadcrumb'> / Project Details</span></h6>
                    </div>
                </div>
            </section>

            {/* section-2 */}
         
            <div className='progress' onClick={goToTop} style={{background : gradientColor}}>
                        <span className='progress-value'><i class="fas fa-arrow-up about-arrow-up"></i></span>
            </div>

            <section className='pt-5'>

                <h3 className='project-section2-header px-5'>Industrial Solution in Central City</h3>
                <p className='project-section2-content px-5'>Fraud and financial crimes are a form of theft/larceny that occur when a person or entity takes money or property, or uses them in an illicit manner, with the intent.The analysis model employed in this study is multiple regression. The results indicate that variable namely, pressure, opportunity, rationalization, competence, and arrogance, simultaneously do not affect fraudulence financial statement.</p>
                <div className='row px-5 pt-5'>
                    <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8'>
                        <img className='project-section2-img' src='./single-project.jpg' alt='single project'></img>
                        <h5 className='project-overview-header'>Project Overview</h5>
                        <p className='project-overview-content'>Cases of fraud were found in Indonesia in 2017 involving PT Jatisari Sri Rejeki. The company is cheating by producing rice that is not suitable with standard quality stated in the packaging label. The correlation of the case against fraudulent financial statements is that there is a difference in the inventory account contained in the financial statements due to changes in the quality of products made by the company.</p>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card project-card px-4 mb-4'>
                            <h5 className='project-info-header pt-5'>Project Info</h5>
                            <p className='project-infos'><b>Engineer : </b> <span className='project-sub-info'>James Cameron</span></p>
                            <p className='project-infos'><b>Category : </b> <span className='project-sub-info'>Construction</span></p>
                            <p className='project-infos'><b>Start Date : </b> <span className='project-sub-info'>30 April 2023</span></p>
                            <p className='project-infos'><b>End Date : </b> <span className='project-sub-info'>31 May 2024</span></p>
                            <p className='project-infos'><b>Address : </b> <span className='project-sub-info'>Tamil Nadu</span></p>
                            <p className='project-infos'><b>Tags : </b> <span className='project-sub-info'>Civil Welding</span></p>

                            <div className='text-center'>
                                <button className='btn btn-primary project-card-btn'>View Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3 */}

            <section>
                <div className='row px-5'>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pt-4'>
                        <img className='project-sec3-img' src="./single-project-2.jpg" alt='Project-img'></img>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pt-4'>
                        <img className='project-sec3-img' src='./single-project-3.jpg' alt='project-img'></img>
                    </div>
                </div>
            </section>

            {/* section-4 */}

            <section>
                <div className='row section-10 pb-5 mt-5'>

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
