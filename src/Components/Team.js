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

function Team() {
  return (
    <>
        <div className="teamSection">
            <div className="container-fluid groupSection">
                <div className="row text-center">
                    <center className="w-100">
                        <h2 className="mt-0 w-100">Meet The Leadership Team</h2>
                        
                    </center>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12 mb-5">
                        <div className="box">
                            <div className="row justify-content-center">
                                
                                <div className="column">
                                    <div className="card">
                                        <div className="content">
                                            <div className="front">
                                                <img className="profile" width="100%" src="images/team/team1.jpg" alt="Ronaldo"/>
                                                <h2>Mr. Samarpit Gupta</h2>
                                            </div>
                                            <div className="back from-bottom">

                                                <h2>Mr. Samarpit Gupta</h2>
                                                <h3>Founder & CEO</h3>
                                                <p className="des">
                                                    Ex: Founding Member & Director Desi Farms
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="content">
                                            <div className="front">
                                                <img className="profile" width="100%" src="images/amitgupta.png" alt="Ronaldo"/>
                                                <h2>Mr. Amit Gupta</h2>
                                            </div>
                                            <div className="back from-bottom">
                                                <h2>Mr. Amit Gupta</h2>
                                                <h3></h3>
                                                <h3>Co-Founder & Chief Strategy Officer</h3>
                                                
                                                <p className="des">
                                                    Ex: Head Consultant Accenture Consulting
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
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

export default Team