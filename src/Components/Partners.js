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

function Partners() {
  return (
    <>
        <div className="partnersMain">
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

export default Partners