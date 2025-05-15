"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";
import testi_data from "@/data/TestimonialData";

import testiThumb_1 from "@/assets/img/other/3.png";

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: false,
   autoplay: false,
   autoplaySpeed: 1500
}

const Testimonial = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="testimonial-area pd-top-100">
         <div className="container">
            <div className="testimonial-area-inner bg-cover" style={{ backgroundImage: `url(/assets/img/other/2.png)` }}>
               <Image className="testimonial-right-img" src={testiThumb_1} alt="img" />
               <div className="testimonial-slider">
                  <Slider {...setting} ref={sliderRef} className="">
                     {testi_data.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="item position-relative">
                           <div className="single-testimonial-inner style-white">
                              <span className="testimonial-quote"><i className="fa fa-quote-left"></i></span>
                              <p className="mb-4">{item.desc}</p>
                              <div className="media testimonial-author">
                                 <div className="media-left">
                                    <Image src={item.author_img} alt="img" />
                                    <i className="fa fa-quote-left"></i>
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h6>{item.author_name}</h6>
                                    <p>{item.designation}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>

                  <div className="owl-nav">
                     <button onClick={handlePrevClick} type="button" role="presentation" className="owl-prev">
                        <span aria-label="Previous">‹</span>
                     </button>
                     <button onClick={handleNextClick} type="button" role="presentation" className="owl-next">
                        <span aria-label="Next">›</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial
