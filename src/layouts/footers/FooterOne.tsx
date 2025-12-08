import Image from "next/image";
import Link from "next/link"

import footerLogo from "@/assets/img/edulogo.webp"

const course_data: string[] = ["Branding design", "Ui/Ux designing", "Make Elements", "Business", "Graphics design"];

const FooterOne = () => {
   return (
      <footer className="footer-area bg-gray">
         <div className="footer-subscribe">
            <div className="container">
               <form className="footer-subscribe-inner">
                  <div className="row">
                     <div className="col-lg-5">
                        <div className="single-input-inner style-border-bottom">
                           <input type="text" placeholder="Your Full Name" />
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="single-input-inner style-border-bottom">
                           <input type="text" placeholder="Your Email Address" />
                        </div>
                     </div>
                     <div className="col-lg-2">
                        <Link className="ed-btn btn-base" href="#">Subscribe</Link>
                     </div>
                  </div>
               </form>
            </div>
         </div>

         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_contact">
                        <h4 className="widget-title">Contact Us</h4>
                        <ul className="details">
                           <li><i className="fa fa-map-marker"></i> Phase 4, Bahria Town, Islamabad</li>
                        <li><i className="fa fa-envelope"></i><a href="mailto:info#educrestmigration.com">info@educrestmigration.com</a> </li>
                           <li><i className="fa fa-phone"></i> <a href="https://wa.me/923195544050">+92 336 8883556</a></li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">Main Universities</h4>
                        <ul>
                           <li>Anglia Ruskin University</li>
                           <li>Keele University</li>
                           <li>University of South Wales</li>
                           <li>University of Wolverhampton</li>

                           
                        </ul>
                     </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6">
                     <div className="widget widget_blog_list">
                        <h4 className="widget-title">News & Blog</h4>
                        <ul>
                           <li>
                              <h6><Link href="/blog-details">Big Ideas Of Business Branding Info.</Link></h6>
                              <span className="date"><i className="fa fa-calendar"></i>December 7, 2023</span>
                           </li>
                           <li>
                              <h6><Link href="/blog-details">Ui/Ux Ideas Of Business Branding Info.</Link></h6>
                              <span className="date"><i className="fa fa-calendar"></i>December 7, 2023</span>
                           </li>
                        </ul>
                     </div>
                  </div> */}

                  {/* <div className="col-lg-3 col-md-6">
                     <div className="widget widget_contact">
                        <h4 className="widget-title">Twitter Feed</h4>
                        <ul className="details">
                           <li>
                              <i className="fa fa-twitter"></i>
                              Simply dummy brand  <a href="#">https//tweets/c3l.com</a>
                              <div className="time">9 Hours ago</div>
                           </li>
                           <li>
                              <i className="fa fa-twitter"></i>
                              Simply dummy brand  <a href="#">https//tweets/c7l.com</a>
                              <div className="time">9 Hours ago</div>
                           </li>
                        </ul>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>

         <div className="footer-bottom">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-md-6 align-self-center">
                     <Link href="/"><Image src={footerLogo} alt="img" width={200} height={50} /></Link>
                  </div>
                  <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
                     <ul className="social-media mt-md-0 mt-3">
                        <li><Link className="facebook" href="https://www.facebook.com/educrestmigration"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link className="instagram" href="https://www.instagram.com/educrestmigration/"><i className="fa fa-instagram"></i></Link></li>
                        <li><Link className="youtube" href="https://www.youtube.com/@EducrestMigration"><i className="fa fa-youtube"></i></Link></li>
                        <li><Link className="linkedin" href="https://www.linkedin.com/company/educrest-migration/posts/?feedView=all"><i className="fa fa-linkedin"></i></Link></li>
                     </ul>
                  </div>
                  <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
                     <p>© 2025 Educrest Migration. All Rights Reserved. Developed by <a href="https://cressoft.net/">Cressoft</a></p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
