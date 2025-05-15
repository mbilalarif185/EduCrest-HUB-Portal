import HomeOne from "@/components/homes/home-one";
import Signin from "@/components/inner-pages/signin";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "EduCrest Migration Portal",
};
const page = () => {
  return (
    <Wrapper>
      <Signin />
    </Wrapper>
  )
}

export default page