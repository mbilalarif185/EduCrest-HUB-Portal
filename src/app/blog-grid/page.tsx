import BlogGrid from "@/components/blogs/blog-grid";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog Edumint - Edumint LMS & Online Courses React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <BlogGrid />
      </Wrapper>
   )
}

export default page