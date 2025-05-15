import Link from "next/link"

const HeaderTopOne = () => {
   return (
      <div className="navbar-top">
         <div className="container">
            <div className="row">
               <div className="col-md-8 text-md-left text-center">
                  <ul>
                     <li><p><i className="fa fa-map-marker"></i> Phase, 4, Bahria Town, Islamabad</p></li>
                     <li><p><i className="fa fa-envelope-o"></i>  info@educrestmigration.com</p></li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <ul className="topbar-right text-md-right text-center">
                     <li className="social-area">
                        <Link href="https://www.facebook.com/educrestmigration"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link href="https://www.linkedin.com/company/educrest-migration/posts/?feedView=all"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                        <Link href="https://www.instagram.com/educrestmigration/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link href="https://www.youtube.com/@EducrestMigration"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne;
