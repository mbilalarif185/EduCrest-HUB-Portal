import CommonBrand from "@/components/common/CommonBrand"

const Brand = () => {
   return (
      <div className="client-area bg-base pd-top-100 pd-bottom-100" style={{ backgroundImage: `url(/assets/img/institute/bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12">
                  <CommonBrand />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Brand
