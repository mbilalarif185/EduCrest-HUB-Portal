"use client"
import blog_data from "@/data/BlogData"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar";

const BlogArea = () => {

   const blog = blog_data.filter(items => items.page === "inner_blog");

   const itemsPerPage = 3;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  {currentItems.map((item) => (
                     <div key={item.id} className="single-blog-inner style-border">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li><i className="fa fa-user"></i> BY ADMIN</li>
                              <li><i className="fa fa-calendar-check-o"></i> {item.date}</li>
                           </ul>
                           <h3 className="title"><Link href="/blog-details">{item.title}</Link></h3>
                           <p>{item.desc}</p>
                           <Link className="read-more-text" href="/blog-details">READ MORE <i className="fa fa-angle-right"></i></Link>
                        </div>
                     </div>
                  ))}

                  <nav className="td-page-navigation">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa fa-angle-double-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<i className="fa fa-angle-double-left"></i>}
                        renderOnZeroPageCount={null}
                        className="pagination"
                     />
                  </nav>
               </div>

               <div className="col-lg-4">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogArea
