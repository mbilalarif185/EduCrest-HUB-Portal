"use client"
import testi_data from "@/data/TestimonialData"
import Image from "next/image"
import Slider from "react-slick"

const setting = {
   infinite: true,
   speed: 1500,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const CommonTestimonial = () => {
   return (
      <Slider {...setting} className="testimonial-slider-2">
         {testi_data.filter((items) => items.page === "home_2").map((item) => (
            <div key={item.id} className="item">
               <div className="single-testimonial-inner">
                  <span className="testimonial-quote"><i className="fa fa-quote-right"></i></span>
                  <p>{item.desc}</p>
                  <div className="media testimonial-author">
                     <div className="media-left">
                        <Image src={item.author_img} alt="img" />
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
   )
}

export default CommonTestimonial
