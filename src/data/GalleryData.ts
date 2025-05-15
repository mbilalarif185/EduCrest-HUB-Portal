import { StaticImageData } from "next/image";

import galleryThumb_1 from "@/assets/img/gallery/1.png";
import galleryThumb_2 from "@/assets/img/gallery/2.png";
import galleryThumb_3 from "@/assets/img/gallery/3.png";
import galleryThumb_4 from "@/assets/img/gallery/4.png";
import galleryThumb_5 from "@/assets/img/gallery/5.png";
import galleryThumb_6 from "@/assets/img/gallery/6.png";

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   desc: string;
}[];

const gallery_data: DataType[] = [
   {
      id: 1,
      thumb: galleryThumb_1,
      title: "Furus fermentum",
      desc: "Consetetur Sadipscing",
   },
   {
      id: 2,
      thumb: galleryThumb_2,
      title: "Sadip fermentum",
      desc: "Consetetur Sadipscing",
   },
   {
      id: 3,
      thumb: galleryThumb_3,
      title: "Furus fermentum",
      desc: "Consetetur Sadipscing",
   },
   {
      id: 4,
      thumb: galleryThumb_4,
      title: "Fermentum Cons",
      desc: "Consetetur Sadipscing",
   },
   {
      id: 5,
      thumb: galleryThumb_5,
      title: "Furus fermentum",
      desc: "Consetetur Sadipscing",
   },
   {
      id: 6,
      thumb: galleryThumb_6,
      title: "Pscing fermentum",
      desc: "Consetetur Sadipscing",
   },
];

export default gallery_data;