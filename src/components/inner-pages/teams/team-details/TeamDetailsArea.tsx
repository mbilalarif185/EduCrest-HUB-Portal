import Image from "next/image"

import teamDetailsThumb_1 from "@/assets/img/team/6.png";
import Link from "next/link";
import course_data from "@/data/CourseData";

const icon: string[] = ["fa fa-facebook", "fa fa-twitter", "fa fa-instagram", "fa fa-pinterest", "fa fa-linkedin"]

const TeamDetailsArea = () => {
   return (
      <div className="main-blog-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="team-details-page">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="thumb">
                        <Image src={teamDetailsThumb_1} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                     <div className="details">
                        <h3>Christine Pearson</h3>
                        <span className="designation">Design Expert</span>
                        <ul className="social-media style-base pt-2 mb-4">
                           {icon.map((li, i) => (
                              <li key={i}>
                                 <Link href="#"><i className={li} aria-hidden="true"></i></Link>
                              </li>
                           ))}
                        </ul>
                        <span>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt</span>
                        <p className="mt-4">Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox </p>
                     </div>
                  </div>
               </div>
               <div className="details-inner mt-4 pt-xl-3">
                  <span>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt</span>
                  <p className="mt-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew </p>
               </div>
            </div>

            <div className="course-area pd-top-90">
               <h4 className="mb-4">Instructor Course</h4>
               <div className="row">
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
      </div>
   )
}

export default TeamDetailsArea
