import React from "react";
// reactstrap components
import { Container } from "reactstrap";
import Slider from 'infinite-react-carousel';

//Slide para reactJS
//https://g787543.github.io/infinite-react-carousel


// core components
function IndexHeader() {
  const settings = {
    autoplay: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrowsBlock: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    dots: false,
  };
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg.jpg") + ")",
        }}
      >

        <div className="filter" />
        <div className="content-center">
          <Container>
            <br />
            <div className="title-brand">
              <br />
              <br />
              <br />
              <div>
                <Slider {...settings}>                 
                  <div>
                  h1                    
                    <img src={require("../../assets/img/slide1.jpg")} height='300' />
                  </div>
                  <div>
                    <img src={require("../../assets/img/slide2.jpg")} height='300'/>
                  </div>
                  <div>
                    <img src={require("../../assets/img/slide3.jpg")} height='300'/>
                  </div>
                  <div>
                    <img src={require("../../assets/img/slide4.jpg")} height='300'/>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="title-brand">
              <h2>
                We provide the solution, not just the service!
            </h2>
            </div>
            <h2 className="presentation-subtitle text-center">
              We are a technology support and maintenance company that is renowned in the market.
            </h2>
            <h2 className="presentation-subtitle text-center">
              <br />
              Read more...
            <a href="#more-infos">
                <img src={require("../../assets/img/arrow_down_blue.gif")} border="0" alt="seta-imagem-animada-0167" />
              </a>
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
