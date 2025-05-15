interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   // {
   //    id: 3,
   //    has_dropdown: true,
   //    title: "Home",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/", title: "Home 01" },
   //       { link: "/home-two", title: "Home 02" },
   //       { link: "/home-three", title: "Home 03" },
   //    ],
   // },
   // {
   //    id: 2,
   //    has_dropdown: true,
   //    title: "Course",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/course", title: "Course" },
   //       { link: "/course-details", title: "Course Single" },
   //    ],
   // },
   // {
   //    id: 3,
   //    has_dropdown: true,
   //    title: "Pages",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/about", title: "About Us" },
   //       { link: "/event", title: "Event" },
   //       { link: "/event-details", title: "Event Details" },
   //       { link: "/team", title: "Instructor" },
   //       { link: "/team-details", title: "Instructor Details" },
   //       { link: "/pricing", title: "Pricing" },
   //       { link: "/gallery", title: "Gallery" },
   //       { link: "/signin", title: "Sign In" },
   //       { link: "/signup", title: "Sign Up" },
   //    ],
   // },
   // {
   //    id: 4,
   //    has_dropdown: true,
   //    title: " Blog ",
   //    link: "#",
   //    sub_menus: [
   //       { link: "/blog", title: "Blog" },
   //       { link: "/blog-grid", title: "Blog Grid" },
   //       { link: "/blog-details", title: "Blog-Details", },
   //    ],
   // },
   {
      id:1,
      has_dropdown: false,
      title: " Uni Finder",
      link: "/search",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact Us",
      link: "/contact",
   },
];
export default menu_data;
