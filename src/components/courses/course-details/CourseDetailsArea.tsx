"use client"
import Image from "next/image"
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import course_data from "@/data/CourseData";
import Link from "next/link";
import CourseDetailsNavTab from "./CourseDetailsNavTab";

import author from "@/assets/img/author/1.png";
import thumb from "@/assets/img/course/9.png";

const CourseDetailsArea = () => {
   return (
      <div className="course-single-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="course-course-detaila-inner">
                     <div className="details-inner">
                        <div className="emt-user">
                           <span className="u-thumb"><Image src={author} alt="img" /></span>
                           <span className="align-self-center">Nancy Reyes</span>
                        </div>
                        <h3 className="title">Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs</h3>
                     </div>
                     <div className="thumb">
                        <Image src={thumb} alt="img" />
                     </div>
                     <CourseDetailsNavTab />
                  </div>
               </div>
               <CourseDetailsSidebar />
            </div>

            <div className="row justify-content-center pd-top-100">
               {course_data.filter((items) => items.page === "home_1").slice(0, 3).map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-course-inner">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                        </div>
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
                                    <div className="rating">
                                       <i className="fa fa-star"></i> {item.rating}
                                       <span>({item.total_rating})</span>
                                    </div>
                                 </div>
                                 <div className="col-6">
                                    <div className="price text-right">
                                       Price: <span>${item.price}.00</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default CourseDetailsArea
