"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useState } from "react";


const NavMenu = () => {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <>
            {menu_data.map((menu: any) => (
                <li key={menu.id} className={` ${menu.has_dropdown ? "menu-item-has-children" : ""}
                ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                    <Link href={menu.link} className={`${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}
                    </Link>
                    {menu.has_dropdown && (
                        <>
                            <ul className={`sub-menu ${navTitle === menu.title ? "show" : ""}`}>
                                {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
                                    <li key={i} className={sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}>
                                        <Link href={sub_m.link}>
                                            <span>{sub_m.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </li>
            ))}
        </>
    );
};

export default NavMenu;

