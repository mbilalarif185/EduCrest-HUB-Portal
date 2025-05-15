import Image from "next/image";

import eventThumb from "@/assets/img/other/events.png";
import Link from "next/link";

interface DataType {
   id: number;
   date: JSX.Element;
   title: string;
}[];

const event_data: DataType[] = [
   {
      id: 1,
      date: (<><span>JAN</span> 20</>),
      title: "Clone sit amet, consec tetur elit",
   },
   {
      id: 2,
      date: (<><span>FEB</span> 26</>),
      title: "Maecenas interdum lorem eleifend",
   },
   {
      id: 3,
      date: (<><span>JAN</span> 28</>),
      title: "Nunc scelerisque tincidunt elit.",
   },
];

const Event = () => {
   return (
      <div className="events-area pd-top-110 pd-bottom-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-11">
                  <div className="section-title text-center">
                     <h6 className="sub-title double-line">EVENTS</h6>
                     <h2 className="title">Upcoming Events</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <ul className="single-blog-list-wrap style-white" style={{ backgroundColor: `var(--heading-color)` }}>
                     {event_data.map((item) => (
                        <li key={item.id}>
                           <div className="media single-blog-list-inner style-white">
                              <div className="media-left date">
                                 {item.date}
                              </div>
                              <div className="media-body details">
                                 <ul className="blog-meta">
                                    <li><i className="fa fa-user"></i> BY ADMIN</li>
                                    <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                                 </ul>
                                 <h5><Link href="/blog-details">{item.title}</Link></h5>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-4 align-self-center">
                  <div className="event-thumb">
                     <Image src={eventThumb} alt="img" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Event
