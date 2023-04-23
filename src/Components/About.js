import React from 'react'
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

function About() {
  return (
    <>
        <div className="aboutMain">
            <div class="spacer10"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 mx-auto">
                        <center>
                            <h2 class="mt-5">About Us </h2>
                        </center>
                        
                        <p class=" mt-3 pt-4">
                            <p>According to a report by Statista Aug 18, 2022 “The market size of the e-commerce industry in
                                India is set to reach USD 350 billion by 2030”, but for many emerging as well as existing brands
                                who leverage e-commerce as a direct channel, will not be able to give a seamless experience to
                                its end consumers. Operating a successful e-commerce channel involves expensive technology
                                tools, third-party integrations, constant co-ordination with partner brands, digital sales and
                                marketing tools.</p>
                            <p>Getting things done with all partners and realising the full potential of the tools is not feasible
                                with the available resources such as technology, digital sales & marketing, operations, funding
                                and a lot more variables which go in positioning the brand.</p>
                            <p>At Fuelling Rocket’s, we take pride in helping brands reach to their market or customers. We do
                                the front end and backend of operations to ensure your brand positioning is with the industry
                                leaders. We make your existing systems seamless and productive with the help of our experts
                                and knowledge. We also help you upscale, get funded, generate more revenues, and solve all
                                end-to-end e-commerce needs with minimal supervision.</p>
                            <p class="text-center mt-3 mb-0"><strong class="mt-2">Brands Should only focus on creating 
                            <span className="wowText"> “WOW PRODUCTS”</span> </strong></p>
                        </p>
                        
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

export default About