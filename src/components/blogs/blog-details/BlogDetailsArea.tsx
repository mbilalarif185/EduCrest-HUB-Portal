"use client"
import Link from "next/link";
import Image from "next/image";
import BlogComment from "./BlogComment";
import BlogForm from "@/components/forms/BlogForm";
import BlogSidebar from "../common-blog/BlogSidebar";

import blogDetailsThumb_1 from "@/assets/img/blog/4.png";
import blogDetailsThumb_2 from "@/assets/img/blog/single.png";

interface ContentType {
   title_1: string;
   desc_1: JSX.Element;
   blockquote: JSX.Element;
   desc_2: JSX.Element;
   title_2: string;
   desc_3: JSX.Element;
   list: string[];
   icon: string[];
}

const content_data: ContentType = {
   title_1: "Flock by when MTV ax quiz prog quiz graced",
   desc_1: (<>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</>),
   blockquote: (<>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</>),
   desc_2: (<>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</>),
   title_2: "AMC Entertainment sparks calls for scrutiny",
   desc_3: (<>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</>),
   list: ["Stet clita kasd gubergren, no sea takimata sanctus", " Ligula cur maecenas no sea takimata", " Fringilla nulla maecenas"],
   icon: ["fa fa-facebook-f", "fa fa-twitter", "fa fa-instagram", "fa fa-behance"],
}

const { title_1, title_2, desc_1, desc_2, desc_3, blockquote, list, icon } = content_data;


const BlogDetailsArea = () => {
   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-details-page-content">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={blogDetailsThumb_1} alt="img" />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li><i className="fa fa-user"></i> BY ADMIN</li>
                              <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                           </ul>
                           <h3 className="title">{title_1}</h3>
                           <p>{desc_1}</p>
                           <blockquote>
                              {blockquote}
                              <h6 className="mb-0 mt-2">Marilyn Gilbert</h6>
                           </blockquote>
                           <p>{desc_2}</p>
                           <div className="thumb mb-4">
                              <Image src={blogDetailsThumb_2} alt="img" />
                           </div>
                           <h5>{title_2}</h5>
                           <p>{desc_3}</p>
                           <ul className="single-list-wrap">
                              {list.map((list, index) => (
                                 <li key={index} className="single-list-inner style-check">
                                    <i className="fa fa-check"></i>{list}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="tag-and-share">
                        <div className="row">
                           <div className="col-sm-6">
                              <h6>Related Tags :</h6>
                              <div className="tags">
                                 <a href="#">Treands, </a>
                                 <a href="#">Inttero, </a>
                                 <a href="#">Estario</a>
                              </div>
                           </div>
                           <div className="col-sm-6 text-sm-right">
                              <div className="blog-share">
                                 <h6>Share :</h6>
                                 <ul>
                                    {icon.map((li, i) => (
                                       <li key={i}><Link href="#"><i className={li} aria-hidden="true"></i></Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <BlogComment />
                     <BlogForm />
                  </div>
               </div>
               <div className="col-lg-4 col-12">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
