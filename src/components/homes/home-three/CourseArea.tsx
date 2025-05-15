import course_data from "@/data/CourseData"
import Image from "next/image"
import Link from "next/link"

const CourseArea = () => {
   return (
      <div className="course-area pd-top-110 pd-bottom-90">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-md-8 align-self-center">
                     <h2 className="title mt-0">Top Featured Courses</h2>
                  </div>
                  <div className="col-md-4 text-md-right mt-3 mt-md-0">
                     <Link className="ed-btn btn-base mt-0" href="/course" style={{color:"#fff"}}>View All</Link>
                  </div>
               </div>
            </div>
            <div className="row">
               {course_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-course-inner style-bottom-thumb">
                        <div className="details">
                           <div className="details-inner">
                              <div className="emt-user">
                                 <span className="u-thumb"><Image src={item.user_thumb} alt="img" /></span>
                                 <span className="align-self-center">{item.user_name}</span>
                              </div>
                              <h6><Link href="/course-details">{item.title}</Link></h6>
                           </div>
                           <div className="emt-course-meta">
                              <div className="row">
                                 <div className="col-6">
                                    <div className="price">${item.price}.00</div>
                                 </div>
                                 <div className="col-6">
                                    <div className="rating text-right">
                                       <i className="fa fa-star"></i> {item.rating}
                                       <span>({item.total_rating})</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default CourseArea
