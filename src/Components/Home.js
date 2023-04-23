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

function Home() {
   
  return (
    <>
        <div className="BannerSection">
         <div className="row-fluid">
            <div className="col-md-12">
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active test"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="1" className="test"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="2" className="test"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="3" className="test"></li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src="images/slider/b1.jpg" className="d-block w-100" alt="..."/>
                     </div>
                     <div className="carousel-item">
                        <img src="images/slider/b2.jpg" className="d-block w-100" alt="..."/>
                     </div>
                     <div className="carousel-item">
                        <img src="images/slider/b3.jpg" className="d-block w-100" alt="..."/>
                     </div>
                     <div className="carousel-item">
                        <img src="images/slider/b4.jpg" className="d-block w-100" alt="..."/>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <i aria-hidden="true"></i>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <i aria-hidden="true"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
      
      <div className="AboutSec">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="text-center mb-2">About Us</h1>
                  
                  <p>According to a report by Statista Aug 18, 2022 “The market size of the e-commerce industry in
                     India is set to reach USD 350 billion by 2030”, but for many emerging as well as existing brands
                     who leverage e-commerce as a direct channel, will not be able to give a seamless experience to
                     its end consumers. Operating a successful e-commerce channel involves expensive technology
                     tools, third-party integrations, constant co-ordination with partner brands, digital sales and
                     marketing tools.
                  </p>
                  <p>Getting things done with all partners and realising the full potential of the tools is not feasible
                     with the available resources such as technology, digital sales & marketing, operations, funding
                     and a lot more variables which go in positioning the brand.
                  </p>
                  <p>At Fuelling Rocket’s, we take pride in helping brands reach to their market or customers. We do
                     the front end and backend of operations to ensure your brand positioning is with the industry
                     leaders. We make your existing systems seamless and productive with the help of our experts
                     and knowledge. We also help you upscale, get funded, generate more revenues, and solve all
                     end-to-end e-commerce needs with minimal supervision.
                  </p>
                  <p className="text-center">
                     <strong>To keep our brands focused only on the creation of 
                           <span className="wowText"> “WOW PRODUCTS”</span> 
                     </strong>
                  </p>
                  
               </div>
            </div>
         </div>
      </div>
      <hr/>
      <div className="AdvantagesSec">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <h1 className="text-center wow bounceIn">Our Services</h1>
                  
               </div>
            </div>
            <div className="row mt-4">
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
                  <div className="AdvantagesBlock boxShadow p-3 rounded">
                     <div className="AdvantagesText">
                        <i className="material-symbols-outlined mb-3">hub</i>
                        <h3>E-Commcart Tech</h3>
                        <p>Our in-house built, multifunctional, fully customizable, highly scalable, fully secured, omni
                           friendly & easily manageable tech platform. Available for Web, android & iOS platform.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
                  <div className="AdvantagesBlock boxShadow p-3 rounded">
                     <div className="AdvantagesText">
                        <i className="material-symbols-outlined">groups</i>
                        <h3>Social Commerce</h3>
                        <p>Our Social Commerce solution enables our partner brand to have a parallel channel of sales &
                           branding,
                           helping them to reduce their extreme dependency on digital advertising spend.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
                  <div className="AdvantagesBlock boxShadow p-3 rounded">
                     <div className="AdvantagesText">
                        <i className="material-symbols-outlined mb-3">frame_person</i>
                        <h3>Customer Retention</h3>
                        <p>“Retaining a customer can be six times more cost-effective than acquiring a new one”. We help
                           in building strategies to retain your customers over a period of time.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
                  <div className="AdvantagesBlock boxShadow p-3 rounded">
                     <div className="AdvantagesText">
                        <i className="icon flaticon-statistics mb-3"></i>
                        <h3>Performance Marketing</h3>
                        <p>Our team of Performance Marketing experts help brands with reaching their target audience at
                           scale. We
                           perform Performance Marketing for your brands on various digital marketing platforms such as
                           Google,
                           Facebook, Instagram, YouTube, Twitter & LinkedIn.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
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
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
                  <div className="AdvantagesBlock boxShadow p-3 rounded">
                     <div className="AdvantagesText">
                        <i className="material-symbols-outlined mb-3">record_voice_over</i>
                        <h3>Influencer Marketing </h3>
                        <p>We are tied up with the best influencers to help your brand build credibility & trust & increase
                           sales and
                           higher customer advocacy.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12 col-12 mb-5 align-items-stretch">
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
                           stores.
                        </p>
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
                           banking partners and revenue-based funding partners.
                        </p>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
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
    </>
  )
}

export default Home