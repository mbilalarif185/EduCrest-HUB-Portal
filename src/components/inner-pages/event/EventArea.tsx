"use client"
import event_data from "@/data/EventData"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";

const EventArea = () => {

   const blog = event_data.filter(items => items.page === "inner_page");

   const itemsPerPage = 6;
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
      <div className="event-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               {currentItems.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="media single-event-inner">
                        <div className="media-left date">
                           <span>{item.month}</span> <br />
                           {item.date}
                        </div>
                        <div className="media-body details">
                           <ul className="blog-meta">
                              <li><i className="fa fa-clock-o"></i> 12:00 AM  To 11:59 PM</li>
                              <li><i className="fa fa-map-marker"></i> Melbourne, Australia</li>
                           </ul>
                           <h5><Link href="/event-details">{item.title}</Link></h5>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}

               <div className="col-12">
                  <nav className="td-page-navigation text-center">
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
            </div>
         </div>
      </div>
   )
}

export default EventArea
