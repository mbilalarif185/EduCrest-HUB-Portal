"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import course_data from "@/data/CourseData";

const tab_title: string[] = ["Graphics & Design", "Digital Marketing", "Music & Audio", "Writing & Translation",];

const CourseArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="course-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10 col-md-11">
                  <div className="section-title style-white text-center">
                     <h2 className="title">Top Featured Courses</h2>
                  </div>
               </div>
            </div>
            <div className="edmt-nav-tab style-white text-center">
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {tab_title.map((tab, index) => (
                     <li key={index} className="nav-item">
                        <a onClick={() => handleTabClick(index)} style={{ cursor: "pointer" }} className={activeTab === index ? 'nav-link active' : ' nav-link'} >{tab}</a>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="tab-content" id="myTabContent">
               <div className={`tab-pane fade ${activeTab === 0 || activeTab === 2 ? 'show active' : ''}`}>
                  <div className="row">
                     {course_data.filter((items) => items.page === "home_1").slice(0, 6).map((item) => (
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

               <div className={`tab-pane fade ${activeTab === 1 || activeTab === 3 ? 'show active' : ''}`}>
                  <div className="row">
                     {course_data.filter((items) => items.page === "home_1").slice(6, 12).map((item) => (
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
         </div>
      </div>
   )
}

export default CourseArea
