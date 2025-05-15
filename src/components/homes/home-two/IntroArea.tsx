import intro_data from "@/data/IntroData"
import Image from "next/image"


const IntroArea = () => {
   return (
      <div className="intro-area intro-area--top">
         <div className="container">
            <div className="intro-area-inner-2">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="section-title text-center">
                        <h6 className="sub-title double-line">FEATURES</h6>
                        <h2 className="title">An exemplary <br /> learning community</h2>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {intro_data.filter((items) => items.page === "home_2").slice(0, 3).map((item) => (
                     <div key={item.id} className="col-md-4">
                        <div className="single-intro-inner style-thumb text-center">
                           <div className="thumb">
                              <Image src={item.icon} alt="img" />
                           </div>
                           <div className="details">
                              <h5>{item.title}</h5>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="intro-footer bg-base">
                  <div className="row">
                     {intro_data.filter((items) => items.page === "home_2").slice(3, 6).map((item) => (
                        <div key={item.id} className="col-md-4">
                           <div className="single-list-inner">
                              <div className="media">
                                 <div className="media-left">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
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

export default IntroArea
