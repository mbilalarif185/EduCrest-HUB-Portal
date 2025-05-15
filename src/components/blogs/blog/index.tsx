import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"

const Blog = () => {
  return (
    <>
    <HeaderOne style_2={true} />
    <Breadcrumb title="Blog" sub_title="Blog" />
    <BlogArea />
    <FooterOne />
    </>
  )
}

export default Blog
