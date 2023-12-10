import Image from "next/image"
import Link from "next/link"
import Doctor from "../(compunents)/Doctor/Doctor"
export default function page() {
  return (
    <div>
    <Doctor />
    <section className="blog mt-5 mb-5 pt-5 pb-5" id="Blog">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="B1 col-lg-12">
                    <h1 className="pt-4">Our Recent Blogs</h1>
                    <p className="pt-3 pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="blog1 col-lg-4 col-md-4">
                    <div className="blog2 pt-3 pb-3">
                        <Image className="f-img img-fluid w-100" src="/images/xb1.jpg.pagespeed.ic.wPUMm-P7hw.webp" height={317} width={519} alt=""/>
                    </div>
                    <Link href="#" className="text-decoration-none">
                        <h4 className="pt-2 pb-2">Portable Fashion for women</h4>
                    </Link>
                    <p className="pt-2 pb-2 text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div className="blog3 text-secondary">
                            <i className="bi bi-calendar3"></i> 13th Dec
                            <i className="bi bi-heart ps-2 pe-2"></i> 15
                            <i className="bi bi-chat ps-2 pe-2"></i> 04
                        </div>
                    </div>
                </div>
                <div className="blog1 col-lg-4 col-md-4">
                    <div className="blog2  pt-3 pb-3">
                        <Image className="f-img img-fluid w-100" src="/images/xb2.jpg.pagespeed.ic.9d6gO-IS1Q.webp" height={317} width={519} alt=""/>
                    </div>
                    <Link href="#" className="text-decoration-none">
                        <h4 className="pt-2 pb-2">Summer ware are coming</h4>
                    </Link>
                    <p className="pt-2 pb-2 text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div className="blog3 text-secondary">
                            <i className="bi bi-calendar3"></i> 13th Dec
                            <i className="bi bi-heart ps-2 pe-2"></i> 15
                            <i className="bi bi-chat ps-2 pe-2"></i> 04
                        </div>
                    </div>
                </div>
                <div className="blog1 col-lg-4 col-md-4">
                    <div className="blog2 pt-3 pb-3">
                        <Image className="f-img img-fluid w-100" src="/images/xb3.jpg.pagespeed.ic.ycNs_Tfir0.webp" height={317} width={519} alt=""/>
                    </div>
                    <Link href="#" className="text-decoration-none">
                        <h4 className="pt-2 pb-2">Summer ware are coming</h4>
                    </Link>
                    <p className="pt-2 pb-2 text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                        <div className="blog3 text-secondary">
                            <i className="bi bi-calendar3"></i> 13th Dec
                            <i className="bi bi-heart ps-2 pe-2"></i> 15
                            <i className="bi bi-chat ps-2 pe-2"></i> 04
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div> 
  )
}
