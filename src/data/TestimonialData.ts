import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/testimonial/1.png";
import authorImg_2 from "@/assets/img/testimonial/2.png";

interface DataType {
   id: number;
   page: string;
   desc: string;
   author_img: StaticImageData;
   author_name: string;
   designation: string;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      desc: "Eugene Freeman sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, elitr, sed diam sed diam volu",
      author_img: authorImg_1,
      author_name: "Eugene Freeman",
      designation: "Tincidunt",
   },
   {
      id: 2,
      page: "home_1",
      desc: "Jaction Freeman amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed elitr, sed diam diam volu",
      author_img: authorImg_2,
      author_name: "Jaction Freeman",
      designation: "Tincidunt",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_1,
      author_name: "Eugene Freeman",
      designation: "Tincidunt",
   },
   {
      id: 2,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_2,
      author_name: "Kelly Coleman",
      designation: "Nulla nec",
   },
   {
      id: 3,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_1,
      author_name: "Eugene Freeman",
      designation: "Tincidunt",
   },
   {
      id: 4,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_2,
      author_name: "Kelly Coleman",
      designation: "Nulla nec",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_1,
      author_name: "Eugene Freeman",
      designation: "Tincidunt",
   },
   {
      id: 2,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_2,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
   {
      id: 3,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_1,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
   {
      id: 4,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_2,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
];

export default testi_data;