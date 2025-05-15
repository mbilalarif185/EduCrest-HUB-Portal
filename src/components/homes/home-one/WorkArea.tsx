import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/12.png";
import icon_2 from "@/assets/img/icon/13.png";
import icon_3 from "@/assets/img/icon/14.png";
import icon_4 from "@/assets/img/icon/15.png";

interface DataType {
   id: number;
   icon: StaticImageData
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Sign up",
      desc: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Select course",
      desc: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Start Learning",
      desc: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
   },
   {
      id: 4,
      icon: icon_4,
      title: "Get Certificate",
      desc: "Ipsum yorem dolor amet sit elit. Duis at est id leosco for it",
   },
]

const WorkArea = () => {
   return (
      <div className="work-area pd-top-110">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-lg-6 align-self-center">
                     <h6 className="sub-title right-line">What we do</h6>
                     <h2 className="title">How it works?</h2>
                  </div>
                  <div className="col-lg-6 align-self-center">
                     <p className="content mt-lg-0">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs when MTV ax quiz</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {work_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                           <Image src={item.icon} alt="img" />
                           <div className="intro-count">{item.id}</div>
                        </div>
                        <div className="details">
                           <h5>{item.title}</h5>
                           <p>{item.desc}</p>
                           <Link className="read-more-text" href="/blog-details">Read More <i className="fa fa-angle-right"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkArea
