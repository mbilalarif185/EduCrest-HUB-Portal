import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"

const Blog = ({ style }: any) => {
   return (
      <div className={`blog-area pd-bottom-90 ${style ? "pd-top-120" : "pd-top-110"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center">
                     <h6 className={`sub-title ${style ? "style-btn" : "double-line"}`}>Latest News</h6>
                     <h2 className="title">Our Insights & Articles</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {blog_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                           <span className="date">{item.date}</span>
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li><i className="fa fa-user"></i> BY ADMIN</li>
                              <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                           </ul>
                           <h5><Link href="/blog-details">{item.title}</Link></h5>
                           <Link className="read-more-text" href="/blog-details">READ MORE <i className="fa fa-angle-right"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Blog
