import Breadcrumb from '@/components/common/Breadcrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import SearchArea from '@/components/search/search'

const Course = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <Breadcrumb title="Your Degree, Recognized Beyond Borders" sub_title="Uni Finder" url='/assets/img/banner/uk.webp'/>
         <SearchArea />
         <FooterOne />
      </>
   )
}

export default Course
