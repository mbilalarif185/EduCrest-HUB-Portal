import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import IntroArea from "./IntroArea"
import About from "./About"
import CourseArea from "./CourseArea"
import SpecialityArea from "./SpecialityArea"
import PricingArea from "./PricingArea"
import Brand from "./Brand"
import Event from "./Event"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import FooterTwo from "@/layouts/footers/FooterTwo"

const HomeTwo = () => {
  return (
    <>
      <HeaderOne style={true} />
      <Banner />
      <IntroArea />
      <About style={false} />
      <CourseArea />
      <SpecialityArea />
      <PricingArea />
      <Brand />
      <Event />
      <Testimonial />
      <Blog style={false} />
      <FooterTwo />
    </>
  )
}

export default HomeTwo
