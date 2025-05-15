import { StaticImageData } from "next/image";

import teamThumb_1 from "@/assets/img/team/1.png";
import teamThumb_2 from "@/assets/img/team/2.png";
import teamThumb_3 from "@/assets/img/team/3.png";
import teamThumb_4 from "@/assets/img/team/4.png";
import teamThumb_5 from "@/assets/img/team/5.png";
import teamThumb_6 from "@/assets/img/team/6.png";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: teamThumb_1,
      title: "Doris Jordan",
      designation: "Design Expert",
   },
   {
      id: 2,
      page: "home_1",
      thumb: teamThumb_2,
      title: "Eugen Freman",
      designation: "Executive",
   },
   {
      id: 3,
      page: "home_1",
      thumb: teamThumb_3,
      title: "Eugene Freeman",
      designation: "Developer",
   },
   {
      id: 4,
      page: "home_1",
      thumb: teamThumb_4,
      title: "Eugene Freeman",
      designation: "Marketing Expert",
   },
   {
      id: 5,
      page: "home_1",
      thumb: teamThumb_5,
      designation: "Ui/Ux Expert",
      title: "Eugene Freeman"
   },
   {
      id: 6,
      page: "home_1",
      thumb: teamThumb_6,
      title: "Eugen Freman",
      designation: "Executive",
   },
];

export default team_data;