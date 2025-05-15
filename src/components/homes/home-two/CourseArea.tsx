import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/6.png";
import icon_2 from "@/assets/img/icon/7.png";
import icon_3 from "@/assets/img/icon/8.png";
import icon_4 from "@/assets/img/icon/9.png";
import icon_5 from "@/assets/img/icon/10.png";
import icon_6 from "@/assets/img/icon/11.png";

import thumb_1 from "@/assets/img/course/1.png"
import thumb_2 from "@/assets/img/course/2.png"
import thumb_3 from "@/assets/img/course/3.png"
import thumb_4 from "@/assets/img/course/4.png"
import thumb_5 from "@/assets/img/course/5.png"
import thumb_6 from "@/assets/img/course/6.png"

import arrow_1 from "@/assets/img/icon/5.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   thumb: StaticImageData;
   title: string;
}[];

const course_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      thumb: thumb_1,
      title: "Creative resilience",
   },
   {
      id: 2,
      icon: icon_2,
      thumb: thumb_2,
      title: "Adaptability",
   },
   {
      id: 3,
      icon: icon_3,
      thumb: thumb_3,
      title: "Project management",
   },
   {
      id: 4,
      icon: icon_4,
      thumb: thumb_4,
      title: "User Interface",
   },
   {
      id: 5,
      icon: icon_5,
      thumb: thumb_5,
      title: "Data Tracking",
   },
   {
      id: 6,
      icon: icon_6,
      thumb: thumb_6,
      title: "Creative resilience",
   },
];

const CourseArea = () => {
   return (
      <div className="course-area pd-top-110 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="section-title text-center">
                     <h6 className="sub-title double-line">OUR COURSES</h6>
                     <h2 className="title">Top Featured Courses</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {course_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-course-inner style-two">
                        <div className="emt-thumb-icon">
                           <Image src={item.icon} alt="img" />
                        </div>
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                        </div>
                        <div className="details">
                           <div className="emt-course-meta border-0">
                              <div className="row">
                                 <div className="col-10">
                                    <h6><Link href="/course-details">{item.title}</Link></h6>
                                 </div>
                                 <div className="col-2 text-right">
                                    <Link className="arrow-right" href="/course-details"><Image src={arrow_1} alt="img" /></Link>
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

export default CourseArea
