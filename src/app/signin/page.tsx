import SingIn from "@/components/inner-pages/signin";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "SingIn Edumint - Edumint LMS & Online Courses React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <SingIn />
      </Wrapper>
   )
}

export default page