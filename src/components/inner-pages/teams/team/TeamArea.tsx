import team_data from '@/data/TeamData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeamArea = () => {
   return (
      <div className="team-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {team_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-team-inner">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                           <div className="social-wrap">
                              <div className="social-wrap-inner">
                                 <Link className="social-share" href="#"><i className="fa fa-share-alt"></i></Link>
                                 <ul>
                                    <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="details">
                           <h4><Link href="#">{item.title}</Link></h4>
                           <span>{item.designation}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TeamArea
