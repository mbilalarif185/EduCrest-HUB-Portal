import CommonTestimonial from "@/components/common/CommonTestimonial"

const Testimonial = () => {
   return (
      <div className="testimonial-area pd-top-110 pd-bottom-120" style={{ backgroundImage: `url(/assets/img/testimonial/bg.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-11">
                  <div className="section-title text-center">
                     <h6 className="sub-title double-line">Client Testimonials</h6>
                     <h2 className="title">What our clients say </h2>
                  </div>
               </div>
            </div>
            <CommonTestimonial />
         </div>
      </div>
   )
}

export default Testimonial
