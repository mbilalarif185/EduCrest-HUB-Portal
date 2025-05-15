import pricing_data from "@/data/PricingData";
import Link from "next/link";

const PricingArea = () => {
   return (
      <div className="pricing-area pd-top-280 pd-bottom-90 text-center" style={{ backgroundImage: `url(/assets/img/bg/pricing-bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-11">
                  <div className="section-title">
                     <h6 className="sub-title double-line">LET’S WORK</h6>
                     <h2 className="title">Pricing Plans</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner-wrap">
                        <div className="single-pricing-inner">
                           <h6 className="title">{item.title}</h6>
                           <div className="price-area">
                              <span>${item.price} </span>
                              / month
                           </div>
                           <ul className="pricing-list">
                              {item.list_details.map((list, index) => (
                                 <li key={index} className={list.class_name}><i className={list.icon}></i>{list.list}</li>
                              ))}
                           </ul>
                           <Link className="ed-btn btn-base btn-radius w-100" href="#">GET STARTED</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingArea
