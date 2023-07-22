import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
         
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center container">
        
        
          <div
            className="h_bg-image order-1 order-lg-9 h-100 box"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
             
          </div>

          
          
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center box overlay">
            
            <div className="align-self-center">
              
              <div className="intro mx-auto">
              
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                
                <p className="mb-1x">{introdata.description}</p>
               
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/portfolio">
                    <div id="button_h" className="ac_btn btn">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  
                </div>
               
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
    </HelmetProvider>
  );
};
