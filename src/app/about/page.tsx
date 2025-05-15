import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "About US",
   description: "EduCrest Migration provides you with leading study abroad consultants in Islamabad that make your journey to study overseas easier.",
};
const page = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default page