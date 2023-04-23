import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <section id="menu-area">
            <div className="header-bottom">
                <div className="container-fluid  wow zoomIn animated">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="header-contact d-flex justify-content-end">
                            <ul className="mx-0 Show">
                            <li className="mr-0">
                                <a href="https://www.facebook.com/FuellingRockets" target="_blank"
                                    title="Facebook Page of Fuelling Rockets">
                                <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li className="mr-0">
                                <a href="" target="_blank" title="Twitter Page of Fuelling Rockets">
                                <i className="fab fa-twitter-square"></i>
                                </a>
                            </li>
                            <li className="mr-0">
                                <a href="" target="_blank" title="Twitter Page of Fuelling Rockets">
                                <i className="ri-linkedin-box-fill"></i>
                                </a>
                            </li>
                            <li className="mr-0">
                                <div className="mail">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:info@fuellingrocktes.com">info@fuellingrocktes.com</a>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid py-3">
                <a className="  navbar-brand" href="/">
                    <img src="images/logos/logo.png" className="img-fluid wow bounceIn" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul id="top-menu" className="nav navbar-nav navbar-right main-nav ml-auto mt-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link scrollto"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link scrollto">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link scrollto">Our Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Partners" className="nav-link scrollto">Our Partners</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Team" className="nav-link scrollto">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link scrollto">Contact us</Link>
                        </li>
                        <li className="nav-item last-nav pt-0 ml-5">
                            <a className="nav-link scrollto " href="#" title="">
                            <i className="ri-whatsapp-line mr-3"></i>
                            <span>Get a Free Demo <br/> <strong>9552136449</strong></span>
                            </a>
                        </li>
                    </ul>
                    <ul className="mx-0 Hide">
                        <li className="mr-0">
                            <a href="https://www.facebook.com/FuellingRockets" target="_blank"
                            title="Facebook Page of Fuelling Rockets">
                            <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        
                        <li className="mr-0">
                            <a href="" target="_blank" title="Twitter Page of Fuelling Rockets">
                            <i className="fab fa-twitter-square"></i>
                            </a>
                        </li>
                        <li className="mr-0">
                            
                            <a href="" target="_blank" title="Twitter Page of Fuelling Rockets">
                            <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </li>
                        
                        <li className="mr-0">
                            <div className="mail">
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:info@fuellingrocktes.com">info@fuellingrocktes.com</a>
                            </div>
                        </li>
                    </ul>
                </div>
                
                </div>
            </nav>
      </section>
    </>
  )
}

export default Header