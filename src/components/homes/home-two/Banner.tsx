import Link from "next/link"

const Banner = () => {
   return (
      <div className="banner-area banner-area-2" style={{ backgroundImage: `url(/assets/img/banner/2.png)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-8 align-self-center">
                  <div className="banner-inner style-white text-center text-lg-left">
                     <h6 className="b-animate-1 sub-title">PLACE TO GROW</h6>
                     <h1 className="b-animate-2 title">WE CREATING LEADERS FOR TOMORROW</h1>
                  <Link className="ed-btn btn-base b-animate-3 btn-gap" href="/blog">Get A Quote</Link>
                     <Link className="ed-btn btn-border-white b-animate-3" href="/blog">Read More</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
