import Singup from "@/components/inner-pages/signup";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Singup EduCrest Hub ",
};
const page = () => {
   return (
      <Wrapper>
         <Singup />
      </Wrapper>
   )
}

export default page