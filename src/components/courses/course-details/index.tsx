import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CourseDetailsArea from "./CourseDetailsArea"

const CourseDetails = () => {
  return (
   <>
      <HeaderOne style_2={true} />
      <Breadcrumb title="Courses Single" sub_title="Courses Single" />
      <CourseDetailsArea />
      <FooterOne />
   </>
  )
}

export default CourseDetails
