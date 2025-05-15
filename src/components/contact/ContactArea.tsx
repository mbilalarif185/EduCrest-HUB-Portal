import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/17.png"
import icon_2 from "@/assets/img/icon/18.png"
import icon_3 from "@/assets/img/icon/16.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: string;
}[];

const contact_list: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Phone",
      desc: "+92 319 554 4050",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Email",
      desc: "info#educrestmigration.com",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Location",
      desc: "Phase 4, Bahria Town, Islamabad",
   },
]
const ContactArea = () => {
   return (
      <div className="contact-list pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {contact_list.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="contact-list-inner">
                        <div className="media">
                           <div className="media-left">
                              <Image src={item.icon} alt="img" />
                           </div>
                           <div className="media-body align-self-center">
                              <h5>{item.title}</h5>
                              <p>
                                 {item.title === "Phone" ? (
                                    <a href={`tel:${item.desc}`}>{item.desc}</a>
                                 ) : item.title === "Email" ? (
                                    <a href={`mailto:${item.desc.replace("#", "@")}`}>{item.desc.replace("#", "@")}</a>
                                 ) : (
                                    item.desc
                                 )}
                              </p>

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

export default ContactArea
