import Link from "next/link";
import ContactForm from "../forms/ContactForm";

const socialLinks = [
   { icon: "fa fa-facebook", url: "https://www.facebook.com/educrestmigration", label: "Facebook" },
   { icon: "fa fa-instagram", url: "https://www.instagram.com/educrestmigration/", label: "Instagram" },
   { icon: "fa fa-youtube", url: "https://www.youtube.com/@EducrestMigration", label: "Pinterest" },
   { icon: "fa fa-linkedin", url: "https://www.linkedin.com/company/educrest-migration/posts/?feedView=all", label: "LinkedIn" },
 ];
 

const ContactFormArea = () => {
   return (
      <div className="counter-area pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="section-title mb-0">
                     <h6 className="sub-title right-line">Need Our Help?</h6>
                     <h2 className="title">Let’s Talk About Your Future</h2>
                     <p className="content pb-3">We are available to help you at every stage, whether you are looking into course options or are prepared to apply.We'll help you proceed with confidence if you message us. </p>
                     <ul className="social-media style-base pt-3">
                        {socialLinks.map((item, i) => (
                              <li key={i}>
                                 <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                 <i className={item.icon} aria-hidden="true"></i>
                                 </Link>
                              </li>
                           ))}
                     </ul>

                  </div>
               </div>
               <div className="col-lg-8 mt-5 mt-lg-0">
                  <ContactForm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactFormArea
