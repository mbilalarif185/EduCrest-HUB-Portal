import Breadcrumb from "@/components/common/Breadcrumb"
import Counter from "@/components/homes/home-one/Counter"
import Team from "@/components/homes/home-three/Team"
import AboutTwo from "@/components/homes/home-two/About"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Testimonial from "./Testimonial"
import Event from "@/components/homes/home-two/Event"
import FooterOne from "@/layouts/footers/FooterOne"
import SpecialityArea from "@/components/homes/home-two/SpecialityArea"

const About = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <Breadcrumb title="About Us" sub_title="About Us" />
         <AboutTwo style={true} />
         <Counter />
         <Team style={true} />
         <SpecialityArea />
         <Testimonial />
         <Event />
         <FooterOne />
      </>
   )
}

export default About
