import Course from "@/components/search";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "EduCrest Migration Portal",
};
const page = () => {
  return (
    <Wrapper>
      <Course />
    </Wrapper>
  )
}

export default page