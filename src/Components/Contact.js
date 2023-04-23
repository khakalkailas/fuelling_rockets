import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};

function Contact() {
  return (
    <>
        <div className="contactMain">
          <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-sm-12 mt-5">
                  <div class="sidebar" >
                      <div class="right_form  ">
                        <h2 class="form_heading mb-3">Request a  <span class="free">Call  </span> Back</h2>
                        <form id="enquire-form1" method="post" action="">
                            <div class="ContactForm">
                              <div class="form-group">
                                <input name="lead_name" id="name" class="form-control" placeholder="Name" type="text"/>

                              </div>
                              <div class="form-group">
                                <input name="lead_email" id="email" class="form-control" placeholder="E mail" type="text" pattern="[^ @]*@[^ @]*"/>

                              </div>
                              <div class="form-group">
                                <input name="lead_mobnum" id="mobile" class="form-control" placeholder="Please enter exactly 10 digits" type="text" maxlength="10" pattern="\d{10}" title=""/>
                              </div>
                              <div class="form-group">
                                <textarea name="lead_query" class="form-control" placeholder="Add your message/Concern" ></textarea>
                              </div>
                              <input type="hidden" name="action" value="enquire_form"/>
                              <input type="hidden" name="token" class="token" value=""/>
                              <div class="form-group adj_last">
                                <input name="submit" value="Submit" class="get_bid" type="submit"/>
                              </div>
                            </div>
                        </form>
                      </div>
                      <div class="spacer30"></div>
                      <div class="clearfix"></div>
                      <div class="d-none">
                        <h4 class="sidebarHeading">Company At A Glance</h4>
                        <hr class="sideHr"/>
                        <div class="profileCard  wow zoomIn">
                            <img src="https://www.fuellingrockets.com/images/2018217/logo/logo.png" alt="" class="img-fluid mb-3"/>
                            <h3>
                              Fuelling Rockets	
                            </h3>
                            <p class="profileTitle">
                              Welcome to fuelling Rockets	
                            </p>
                            <div>
                              <a href="https://www.fuellingrockets.com/" title="Homepage of Fuelling Rockets"><i class="fa fa-dribbble"></i></a>
                              <a href="" title="Twitter page of  Fuelling Rockets"><i class="fa fa-twitter"></i></a>
                              <a href="https://www.linkedin.com/company/fuelling-rockets/" title="LinkedIn page of  Fuelling Rockets"><i class="fa fa-linkedin"></i></a>
                              <a href="https://www.facebook.com/FuellingRockets" title="Facebook page of  Fuelling Rockets"><i class="fa fa-facebook"></i></a>
                            </div>
                            <p><a href="about.html">Know More</a></p>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="col-md-1 mt-5 col-sm"></div>
                <div class="col-md-6 col-sm-12 ConSection mt-5">
                  <center>
                      <h2 class="text-left">Contact Us </h2>
                  </center>
                  <div class="spacer10"></div>
                  <ul class="ContactSec">
                      <li><i class="material-symbols-outlined">cottage</i> 
                        <span stle="float:left; width:100%;"><strong>Pune Address :</strong> Mohite Paradise, Sinhgad Road, Near New Poona Bakery, Pune, Maharashtra 411051.</span>
                      </li>
                      <li><i class="material-symbols-outlined">cottage</i> 
                        <span stle="float:left; width:100%;"><strong>Kanpur Address :</strong> Office No- 2 & 3, Ground Floor, Swagat Market, Panki Road, Kalyanpur, Kanpur 208017.</span>
                      </li>
                      <li><i class="material-symbols-outlined">villa</i> 
                        <span stle="float:left; width:100%;"><strong>Nashik Address :</strong> Shreenath Enclave, near Harsiddhi Ceramics, Mumbai Naka, Renuka Nagar, Nashik, Maharashtra 422011.</span>
                      </li>
                      <li><i class="material-symbols-outlined">call</i> <span>9552136449 </span></li>
                      <li><i class="material-symbols-outlined">contact_mail</i> <span><a href="mailto:info@fuellingrocktes.com">info@fuellingrocktes.com</a></span></li>
                  </ul>

                  
                </div>
                
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="spacer10"></div>
          <div class="spacer10"></div>
          <div class="clearfix"></div>
          <div class="spacer10"></div>
          <section className="sidebar-page-container GallerySec">
              <div className="container">
                  <div className="sec-title text-center">
                      <h2>Our Partners</h2>
                  </div>
                  <OwlCarousel className="slider-items owl-carousel" {...options}>
                      <div class="item"><img src="images/logos/logos_01.png"/></div>
                      <div class="item"><img src="images/logos/logos_02.png"/></div>
                      <div class="item"><img src="images/logos/logos_03.png"/></div>
                      <div class="item"><img src="images/logos/logos_04.png"/></div>
                      <div class="item"><img src="images/logos/logos_05.png"/></div>
                      <div class="item"><img src="images/logos/logos_06.png"/></div>
                      <div class="item"><img src="images/logos/logos_07.png"/></div>
                  </OwlCarousel>
              </div>
          </section>
        </div>
    </>
  )
}

export default Contact