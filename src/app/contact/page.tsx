import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Contact US",
};
const page = () => {
   return (
      <Wrapper>
         <Contact />
      </Wrapper>
   )
}

export default page