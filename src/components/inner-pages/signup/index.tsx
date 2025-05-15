import Breadcrumb from '@/components/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import SingupArea from './SingupArea'
import FooterOne from "@/layouts/footers/FooterOne"

const Singup = () => {
   return (
      <>
         <HeaderOne style_2={true} />
         <Breadcrumb title="Sign Up" sub_title="Sign Up"  url='/assets/img/banner/signup.webp'/>
         <SingupArea style={false} />
         <FooterOne />
      </>
   )
}

export default Singup
