import React, { useState } from 'react';
import {Link} from 'react-scroll'

import Covidresultdisplay from "../Covidresultdisplay/Covidresultdisplay";
const Main = () => {

    let [responseObj, setResponseObj] = useState({});
    let [country, setCountry] = useState('');
    let [error, setError] = useState(false);
   let [loading, setLoading] = useState(false);



    function getStat(e) {
        e.preventDefault();
        if (country.length === 0) {
            return setError(true);
        }
        setError(false);
        setResponseObj({});
        
        setLoading(true);
        

    const uriEncodedCountry = encodeURIComponent(country);
    fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${uriEncodedCountry}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    })
    .then(response => response.json())
       .then(response => {
        if (response.statusCode !== 200) {
            throw new Error()
        }
           setResponseObj(response);
           setLoading(false);
           
       })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
   }
    return (
        <div>
        <header id="header" className="fixed-top">
          <div className="container-fluid d-flex">
            <div className="logo mr-auto">
              <h1 className="text-light"><a href="index.html"><span>Covid-19 statistics</span></a></h1>
            </div>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
               
               <button className="get-started"><Link to="count" smooth={true} duration={1000}>Check Count</Link></button>
                <li><Link to="protect" smooth={true} duration={1000}>How to protect yourself</Link></li>
                <li><Link to="footer" smooth={true} duration={1000}>Get in touch with us</Link></li>
              </ul>
            </nav>{/* .nav-menu */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1> Covid-19 official counts from each country.</h1>
                <h2>World Health Organization daily updates.</h2>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src="assets/img/hero-img.svg" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= Reportedcases Section ======= */}
          <section id="reportedcases" className="report">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-5 d-flex align-items-center justify-content-center report-img">
                  <img src="assets/img/covid-19test.png" className="img-fluid" alt="" data-aos="zoom-in" />
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                  <h3 data-aos="fade-up">Reported Cases and Deaths by Country, Territory, or Conveyance</h3>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    It brings together global data on testing for COVID-19, and the counts of confirmed cases and deaths.
                  </p>
                  <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                    <i class='bx bx-vial'></i>
                      <h4>What the data can tell us</h4>
                      <p>Without data we can not understand the pandemic</p>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                    <i class='bx bx-plus-medical' ></i>
                      <h4>What the data cannot tell us</h4>
                      <p>But even the best available data on the coronavirus pandemic is far from perfect.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Reportedcases Section */}
          {/* ======= Check covid count Section ======= */}
          <section id="count" className="count">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <p>Check Covid-19 count of your country</p>
              </div>
              <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                <form onSubmit={getStat} className="php-email-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      
                      <input type="text" name="name"  placeholder="Please Enter Country"  value={country}
                    onChange={(e) => setCountry(e.target.value)} className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate" />
                      <div className="text-center" style={{marginTop: '15px'}}><button type="submit">Get Count</button></div><br /><br />
                      <p>Please Enter the first letter of your country as capital letter otherwise total global covid-19 count will be display. </p>
                    </div>
                
                    <Covidresultdisplay
               responseObj={responseObj}
               error={error} //new
              loading={loading} //new
              />
                  </div></form>
                  
                 
              
                  <div className="card-body">
                  
                  
                   
                  </div>
                </div>
              </div>
      </section>{/* End Check covid count Section */}
          {/* ======= How to protect Section ======= */}
          <section id="protect" className="protect section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <p>How to protect yourself against covid-19</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box">
                    <img src="assets/img/facemask.png" className="img-fluid animated" alt="" />
                    <br /><br />
                    <h4 className="title"><a href>Always put on your nosecover</a></h4>
                    <p className="description">Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="icon-box">
                    <img src="assets/img/meter.png" className="img-fluid animated" alt="" />
                    <br /><br />
                    <h4 className="title"><a href>Avoid close contact</a></h4>
                    <p className="description">If possible, maintain 6 feet between the person who is sick and other household members.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="icon-box">
                    <img src="assets/img/wash.png" className="img-fluid animated" alt="" />
                    <br /><br />
                    <h4 className="title"><a href>Wash your hands often</a></h4>
                    <p className="description">Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place. </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={400}>
                  <div className="icon-box">
                    <img src="assets/img/sanitize.png" className="img-fluid animated" alt="" />
                    <br /><br />
                    <h4 className="title"><a href>Clean and disinfect</a></h4>
                    <p className="description">Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End How to protect Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay={100}>
                  <h3>Compiletechs</h3>
                  <p>
                    103 Akowonjo Road <br />
                    Egbeda,Lagos State<br />
                    Nigeria.<br /><br />
                    <strong>Phone:</strong> +234 813 4820 565<br />
                    <strong>Email:</strong> info@compiletechs.com.ng<br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay={300}>
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay={400}>
                  <h4>Our Social Networks</h4>
                  <p>Get in touch with us on our social media channel</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="copyright">
              © Copyright <strong><span>compiletechs</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://compiletechs.com.ng/">compiletechs</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
      </div>

    );
    
  }
  


export default Main;