"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./menu/NavMenu";
import HeaderTopOne from "./menu/HeaderTopOne";
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react";
import HeaderSearchbar from "./menu/HeaderSearchbar";

import logo_1 from "@/assets/img/edulogo.webp";
import logo_2 from "@/assets/img/logo-2.png";

const HeaderOne = ({ style, style_2 }: any) => {

   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isSearch, setIsSearch] = useState<boolean>(false);

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

   return (
      <>
         <div className="navbar-area">
            <HeaderTopOne />
            <nav className={`navbar navbar-area navbar-expand-lg ${style_2 ? "bg-white" : ""} ${style ? "navbar-area-2" : "navbar-area-1"} ${sticky ? "sticky-active" : ""}`}>
               <div className="container nav-container">
                  <div className="responsive-mobile-menu">
                     <button
                        onClick={toggleMobileMenu}
                        className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`} data-target="#edumint_main_menu"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-left"></span>
                        <span className="icon-right"></span>
                     </button>
                  </div>
                  <div className="logo">
                     <Link href="/"><Image src={style ? logo_2 : logo_1} alt="img"  width={150} height={50} /></Link>
                  </div>
                  <div className="nav-right-part nav-right-part-mobile d-lg-none align-items-center">
                     <Link className="signin-btn" href="/signin" >Sign In</Link>
                     <Link className="ed-btn btn-base" href="/signup">Sign Up</Link>
                     <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-bar"><i className="fa fa-search"></i></a>
                  </div>
                  <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`} id="edumint_main_menu">
                     <ul className="navbar-nav menu-open">
                        <NavMenu />
                     </ul>
                  </div>
                  <div className={`nav-right-part nav-right-part-desktop d-none d-lg-flex align-items-center ${style ? "style-black" : ""}`}>
                     <Link className="signin-btn" href="/signin">Sign In</Link>
                     <Link className="ed-btn btn-base" href="/signup">Sign Up</Link>
                     <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-bar"><i className="fa fa-search"></i></a>
                  </div>
               </div>
            </nav>
         </div>

         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderOne
