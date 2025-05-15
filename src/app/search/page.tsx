import Course from "@/components/search";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "EduCrest Hub | Uni Finder",
};
const page = () => {
   return (
      <Wrapper>
         <Course />
      </Wrapper>
   )
}

export default page