import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ title, sub_title,url }: any) => {
   return (
      <div className="breadcrumb-area bg-overlay" style={{ backgroundImage: `url(${url || '/assets/img/default-bg.jpg'})` }}>
         <div className="container">
            <div className="breadcrumb-inner">
               <div className="section-title mb-0 text-center">
                  <h2 className="page-title">{title} {} </h2>
                  <ul className="page-list">
                     <li><Link href="/">Home</Link></li>
                     <li>{sub_title}</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Breadcrumb
