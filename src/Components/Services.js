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

function Services() {
  return (
    <>
        <div className="AdvantagesSec AdvantagesSec2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center wow bounceIn mt-2">Our Services</h2>
                        
                    </div>
                </div>
                
                <div className="row mt-4">
                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">hub</i>
                                <h3>E-Commcart Tech</h3>
                                <p>Our in-house built, multifunctional, fully customizable, highly scalable, fully secured, omni
                                    friendly & easily manageable tech platform. Available for Web, android & iOS platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined">groups</i>
                                <h3>Social Commerce</h3>
                                <p>Our Social Commerce solution enables our partner brand to have a parallel channel of sales &
                                    branding,
                                    helping them to reduce their extreme dependency on digital advertising spend.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">frame_person</i>
                                <h3>Customer Retention</h3>
                                <p>“Retaining a customer can be six times more cost-effective than acquiring a new one”. We help
                                    in building strategies to retain your customers over a period of time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="icon flaticon-statistics mb-3"></i>
                                <h3>Performance Marketing</h3>
                                <p>Our team of Performance Marketing experts help brands with reaching their target audience at
                                    scale. We
                                    perform Performance Marketing for your brands on various digital marketing platforms such as
                                    Google,
                                    Facebook, Instagram, YouTube, Twitter & LinkedIn.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">storefront</i>
                                <h3>Marketplace Management</h3>
                                <p>We help your brand with managing the marketplace presence, building sales pipeline and managing
                                    your
                                    brand reputation on all the major marketplaces, like Amazon, Flipkart, Myntra etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">record_voice_over</i>
                                <h3>Influencer Marketing </h3>
                                <p>We are tied up with the best influencers to help your brand build credibility & trust & increase
                                    sales and
                                    higher customer advocacy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="icon flaticon-graph mb-3"></i>
                                <h3>E-commerce Consulting</h3>
                                <p>Our 360° approach positions your brand & products immaculately among all the omni-channels
                                    available
                                    in the market. We take pride in giving your customers, a holistic shopping experience. We will
                                    enable
                                    web store performance, optimized fulfilment cycles, performance marketing audit, funnel
                                    improvement &
                                    optimizing e-commerce p&l.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-sm-12 col-12">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">add_business</i>
                                <h3>Build & Grow Your Franchise Network</h3>
                                <p>We help you in setting up viable Franchise Network of flagship stores, cloud stores & dark
                                    stores.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                        <div className="AdvantagesBlock boxShadow p-3 rounded">
                            <div className="AdvantagesText">
                                <i className="material-symbols-outlined mb-3">altitude</i>
                                <h3>Get Funded</h3>
                                <p>We help our partner brands in raising capital from our network of angel & seed investors, our
                                    investment
                                    banking partners and revenue-based funding partners.</p>
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
            <section class="sidebar-page-container GallerySec">
                <div class="container">
                    <div class="sec-title text-center">
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

export default Services