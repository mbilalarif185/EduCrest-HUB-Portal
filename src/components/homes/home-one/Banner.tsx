import Image from "next/image"
import bannerThumb from "@/assets/img/banner/1.png"
import Link from "next/link"

const Banner = () => {
   return (
      <div className="banner-area banner-area-1 bg-gray">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
                  <div className="thumb b-animate-thumb">
                     <Image src={bannerThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-7 order-lg-1 align-self-center">
                  <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                     <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6>
                     <h1 className="b-animate-2 title">A better learning future starts here</h1>
                     <Link className="ed-btn btn-base b-animate-3 btn-gap" href="/contact">Get A Quote</Link>
                     <Link className="ed-btn btn-border-black b-animate-3" href="/blog">Read More</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
