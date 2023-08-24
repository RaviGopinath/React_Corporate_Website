import React, {useState, useEffect} from 'react';
import './Footer.css';

export const Footer = () => {

    const [currentYear, setCurrentYear] = useState();

    useEffect(()=>{
        getYear();
    },[])

    const getYear = () =>{
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }


    return (
        <div className='container-fluid'>
            <div className='row' style={{ backgroundColor: "#0F112A" }}>

                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 xol-xxl-6'>
                    <p className='footer-text-1 pt-3 pb-3'>© {currentYear} Focusbytes. All rights reserved.</p>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 xol-xxl-6'>
                    <p className='footer-text-2 pt-3 pb-3'>Privacy Policy | Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}
